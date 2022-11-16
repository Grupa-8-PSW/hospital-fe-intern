import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Patient from 'src/app/model/patient';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import PatientAgeStatistic from 'src/app/model/patient-age-statistic.model';

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

  getPatientAgeStatistic() : Observable<PatientAgeStatistic> {
    return this.http.get<PatientAgeStatistic>(this.patientUrl + '/ageStatistic');
  }
}
