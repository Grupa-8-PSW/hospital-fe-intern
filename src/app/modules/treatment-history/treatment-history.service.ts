import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import TreatmentHistory from 'src/app/model/treatmentHistory';


@Injectable({
  providedIn: 'root'
})
export class TreatmentHistoryService {

  treatmentHistoryUrl = `${environment.apiUrL}/TreatmentHistory/`;
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

  
}
