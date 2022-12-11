import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenderService {
  apiHost: string = 'http://localhost:5131/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getTenders(): Observable<any> {
      return this.http.get<any>(this.apiHost + 'api/Tender/getAllForOffers/',  {'headers': this.headers});
  }

  getOffersForTender(id: any): Observable<any> {
    return this.http.get<any>(this.apiHost + 'getOffersForTender?tenderID='+ id,  {'headers': this.headers});
   }

}