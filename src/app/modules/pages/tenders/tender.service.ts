import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Tender from 'src/app/model/tender';

@Injectable({
  providedIn: 'root'
})
export class TenderService {

  apiHost: string = 'http://localhost:5131/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public createTender(tender: Tender): void {
    console.log(tender);
    this.http.post(this.apiHost + 'api/Tender', tender, {headers: this.headers}).subscribe(res => {
      console.log('Sent!');
    })
  }
}
