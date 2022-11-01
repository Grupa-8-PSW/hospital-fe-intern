import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import Examination from 'src/app/model/examination';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  examinationUrl = `${environment.apiUrL}/Examination/`;
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

  createExamination(examination: Examination): Observable<any> {
    return this.http.post(this.examinationUrl, examination, { headers: this.headers });
  }

  rescheduleExamination(id: number, object: any) : Observable<any> {
    return this.http.patch(this.examinationUrl + id, object, { headers: this.headers })
  }
}
