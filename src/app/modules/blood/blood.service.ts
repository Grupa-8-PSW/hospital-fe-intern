import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import Blood from './model/Blood';
import { environment } from 'src/environments/environment';
import { BloodType } from './model/BloodType';
import BloodUnitRequest from './model/BloodUnitRequest';

@Injectable({
  providedIn: 'root'
})
export class BloodService {
  baseUrl = `${environment.apiUrL}/internal/Blood`
  baseUrlBloodUnitRequest = `${environment.apiUrL}/internal/BloodUnitRequest`
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(
    private http: HttpClient
  ) { }


  

  createBloodRequest(bloodRequest: BloodUnitRequest): Observable<any> {
    return this.http.post(this.baseUrlBloodUnitRequest, bloodRequest, { headers: this.headers });
  }

  getAll(): Observable<Blood[]> {
    return this.http.get<Blood[]>(this.baseUrl).pipe();
  }

  
}



