import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodBankNews } from 'src/app/model/bloodBankNews';

@Injectable({
  providedIn: 'root'
})

export class BloodBankNewsService {

  apiHost: string = 'http://localhost:5131/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  getAll(): Observable<BloodBankNews[]> {
    return this.http.get<BloodBankNews[]>(this.apiHost + 'api/BloodBankNews', {headers: this.headers});
  }

  archiveNews(news: BloodBankNews) {
    return this.http.put<any>(this.apiHost + 'api/BloodBankNews/archiveNews', news, {headers: this.headers})
  }

  publishNews(news: BloodBankNews) {
    return this.http.put<any>(this.apiHost + 'api/BloodBankNews/publishNews', news, {headers: this.headers})
  }

}
