import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import TreatmentHistory from 'src/app/model/treatmentHistory';
import Room from 'src/app/model/room';


@Injectable({
  providedIn: 'root'
})
export class TreatmentHistoryService {

  treatmentHistoryUrl = `${environment.apiUrL}/TreatmentHistory`;
  roomUrl = `${environment.apiUrL}/map/floor/rooms/Room/free`;

  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient
  ) { }

  getAllTreatmentHistorys() : Observable<TreatmentHistory[]> {
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

  createTreatmentHistory(treatmentHistoryDTO: TreatmentHistory): Observable<any> {
    return this.http.post(this.treatmentHistoryUrl, treatmentHistoryDTO, { headers: this.headers });
  }

  getFreeRooms() : Observable<Room[]> {
    return this.http.get<Room[]>(this.roomUrl);
  }

}
