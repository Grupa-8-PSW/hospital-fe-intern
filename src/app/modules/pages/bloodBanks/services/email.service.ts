import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  apiHost: string = 'http://localhost:5131/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  sendEmail(mail: any): Observable<any> {
    window.alert({ email: mail });
    return this.http.post<any>(this.apiHost + 'api/Email', { email: mail }, {headers: this.headers});
  }

}
