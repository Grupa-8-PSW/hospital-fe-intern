import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import TreatmentHistory from 'src/app/model/treatmentHistory';

import Room from 'src/app/model/room';
import Therapy from 'src/app/model/therapy';
import MedicalDrugs from 'src/app/model/medicalDrugs';
import Patient from 'src/app/model/patient';



@Injectable({
  providedIn: 'root'
})
export class TreatmentHistoryService {


  treatmentHistoryUrl = `${environment.apiUrL}/TreatmentHistory`;
  roomUrl = `${environment.apiUrL}/map/floor/rooms/Room/free`;
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
    return this.http.get<TreatmentHistory>(this.treatmentHistoryUrl + "/" + id).pipe(
      map(treatmentHistory => {
        return {
          ...treatmentHistory,
          //startDate: moment(treatmentHistory.startDate),
          //endDate: string(treatmentHistory.endDate)
        }
      })
    );
  }

  createTreatmentHistory(treatmentHistory: TreatmentHistory): Observable<any> {
    return this.http.post(this.treatmentHistoryUrl, treatmentHistory, { headers: this.headers });
  }

  finishTreatmentHistory(treatmentHistory: TreatmentHistory): Observable<any> {
    return this.http.put(this.treatmentHistoryUrl + "/finish/" + treatmentHistory.id, treatmentHistory, { headers: this.headers });
  }

  //move to room service
  getFreeRooms() : Observable<Room[]> {
    return this.http.get<Room[]>(this.roomUrl);
  }

  downloadReport(treatmentHistoryId: number) {
    return this.http.get(`${this.treatmentHistoryUrl}/generateReport/${treatmentHistoryId}`, {
      observe: 'response',
      responseType: 'blob'
    });
  }

  createTherapy(therapy: Therapy): Observable<any> {
    return this.http.post(this.therapyUrl, therapy, { headers: this.headers });
  }

  getAllMedicalDrugs(): Observable<MedicalDrugs[]>{
    return this.http.get<MedicalDrugs[]>(this.medicalDrugsUrl);
  }

  getPatientsWithoutActiveTreatment() : Observable<Patient[]> {
    return this.http.get<Patient[]>(this.treatmentHistoryUrl + "/withoutActiveTreatment");
  }

}
