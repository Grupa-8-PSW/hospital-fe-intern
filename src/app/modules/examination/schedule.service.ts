import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import Examination from 'src/app/model/examination';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import Symptom from 'src/app/model/symptom';
import ExaminationDone from 'src/app/model/examination-done';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  examinationUrl = `${environment.apiUrL}/Examination/`;
  examinationDoneUrl = `${environment.apiUrL}/ExaminationDone`;
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient
  ) { }

  getAllExaminations() : Observable<Examination[]> {
    return this.http.get<Examination[]>(this.examinationUrl);
  }

  getExaminationById(id: number): Observable<Examination> {
    return this.http.get<Examination>(this.examinationUrl + id).pipe(
      map(examination => {
        return {
          ...examination,
          startTime: moment(examination.startTime)
        }
      })
    );
  }

  createExamination(examination: object): Observable<any> {
    return this.http.post(this.examinationUrl, examination, { headers: this.headers });
  }

  rescheduleExamination(examination: Examination) : Observable<any> {
    return this.http.put(this.examinationUrl + examination.id, examination, { headers: this.headers })
  }

  getExaminationsByDate(day:number, month:number, year:number): Observable<Examination[]> {
    return this.http.get<Examination[]>(this.examinationUrl + day + '/' + month + "/" + year, {headers: this.headers});
  }

  getAllSymptoms() : Observable<Symptom[]> {
    return this.http.get<Symptom[]>(this.examinationDoneUrl + '/symptoms');
  }

  createExaminationDone(examinationDone: ExaminationDone): Observable<any> {
    return this.http.post(this.examinationDoneUrl, examinationDone, { headers: this.headers });
  }

}
