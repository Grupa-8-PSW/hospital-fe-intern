import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrgentRequestService {

  apiHost: string = 'http://localhost:5131/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAll(bloodConsumptionReport: any): Observable<any> {
    return this.http.get<any>(this.apiHost + 'api/UrgentRequest', {'headers': this.headers});
  }

  generate(startTime: Date, endTime: Date): Observable<any> {
    const p = {'from': startTime.toString(), 'to': endTime.toString()};
    const requestOptions: Object = {
      observe: 'response',
      responseType: 'blob',
      params: p
    }
    return this.http.get<any>(this.apiHost + 'api/UrgentRequest/generatePdf', requestOptions);
  }
}
