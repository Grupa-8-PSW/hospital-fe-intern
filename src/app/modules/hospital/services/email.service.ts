import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  apiHost: string = 'http://localhost:5174/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  sendEmail(email: any): Observable<any> {
    window.alert(email);
    return this.http.post<any>(this.apiHost + 'api/Email', email, {headers: this.headers});
  }

}
