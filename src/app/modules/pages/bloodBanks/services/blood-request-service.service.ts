import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodRequestServiceService {

  apiHost: string = 'http://localhost:5131/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getBloodRequests(): Observable<any> {
    return this.http.get(this.apiHost + "api/BloodUnitRequest", {headers: this.headers});
  }
}
