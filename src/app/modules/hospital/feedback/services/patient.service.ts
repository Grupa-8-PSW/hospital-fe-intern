import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Patient from 'src/app/model/patient';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Statistic from 'src/app/model/statistic.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patientUrl = `${environment.apiUrL}/Patient`;

  constructor(
    private http: HttpClient
  ) { }

  getAllPatients() : Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.patientUrl + id);
  }

  getStatistic() : Observable<Statistic> {
    return this.http.get<Statistic>(this.patientUrl + '/statistic');
  }

  getPatientStatisticForSelectedDoctor(id: number): Observable<Statistic> {
    return this.http.get<Statistic>(this.patientUrl + '/statistic/doctor/' + id);
  }
}
