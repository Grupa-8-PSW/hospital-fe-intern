import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import TreatmentHistory from 'src/app/model/treatmentHistory';
import Therapy from 'src/app/model/therapy';
import MedicalDrugs from 'src/app/model/medicalDrugs';


@Injectable({
  providedIn: 'root'
})
export class TreatmentHistoryService {

  treatmentHistoryUrl = `${environment.apiUrL}/TreatmentHistory/`;
  therapyUrl = `${environment.apiUrL}/Therapy`;
  medicalDrugsUrl = `${environment.apiUrL}/internal/MedicalDrugs`;
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient
  ) { }

  getAllTreatmentHistories() : Observable<TreatmentHistory[]> {
    return this.http.get<TreatmentHistory[]>(this.treatmentHistoryUrl);
  }

  getTreatmentHistoryById(id: number): Observable<TreatmentHistory> {
    return this.http.get<TreatmentHistory>(this.treatmentHistoryUrl + id).pipe(
      map(treatmentHistory => {
        return {
          ...treatmentHistory,
          startDate: moment(treatmentHistory.startDate),
          endDate: moment(treatmentHistory.endDate)
        }
      })
    );
  }

  createTreatmentHistory(treatmentHistory: TreatmentHistory): Observable<any> {
    return this.http.post(this.treatmentHistoryUrl, treatmentHistory, { headers: this.headers });
  }

  createTherapy(therapy: Therapy): Observable<any> {
    return this.http.post(this.therapyUrl, therapy, { headers: this.headers });
  }

  getAllMedicalDrugs(): Observable<MedicalDrugs[]>{
    return this.http.get<MedicalDrugs[]>(this.medicalDrugsUrl);
  }

  
}
