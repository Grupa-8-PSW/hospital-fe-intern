import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleReportsService {

  apiHost: string = 'http://localhost:5131/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createReport(bloodConsumptionReport: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/BloodConsumptionConfiguration/daily', bloodConsumptionReport, {'headers': this.headers});
  }
}
