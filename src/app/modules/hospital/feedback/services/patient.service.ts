import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Patient from 'src/app/model/patient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Statistic from 'src/app/model/statistic.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patientUrl = `${environment.apiUrL}/internal/Patient/`;
  authUrl = `${environment.apiUrL}/Auth/`;
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient
  ) { }

  getAllPatients() : Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.patientUrl + id);
  }

  /*getPatientsWithoutActiveTreatment() : Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl + "withoutActiveTreatment");
  }*/
  getStatistic() : Observable<Statistic> {
    return this.http.get<Statistic>(this.patientUrl + 'statistic');
  }

  getPatientStatisticForSelectedDoctor(id: number): Observable<Statistic> {
    return this.http.get<Statistic>(this.patientUrl + 'statistic/doctor/' + id);
  }
  manageAccess(email: string,type : string): Observable<any> {
    return this.http.put<any>(this.authUrl + 'manageAccess/'+type+'/'+email , {'headers': this.headers});
  }
}

