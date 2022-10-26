import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {

  apiHost: string = 'http://localhost:5174/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createBloodBank(bloodBank: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/bloodBanks/', bloodBank, {'headers': this.headers});
  }

}
