import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodBankNews } from 'src/app/model/bloodBankNews';

@Injectable({
  providedIn: 'root'
})

export class BloodBankNewsService {

  apiHost: string = 'http://localhost:5131/';
  headers = new HttpHeaders().set('Content-Type', 'application/json'); 



  constructor(private http: HttpClient) { }

  getAll(): Observable<BloodBankNews[]> {
    return this.http.get<BloodBankNews[]>(this.apiHost + 'api/BloodBankNews', {headers: this.headers});
  }

  archiveNews(news: BloodBankNews) {
    const headers = new HttpHeaders()
   .append('Content-Type' , 'application/json');
    return this.http.put<any>(this.apiHost + 'api/BloodBankNews/archiveNews', news, {headers: headers})
  }

  publishNews(news: BloodBankNews) {
    const headers = new HttpHeaders()
   .append('Content-Type' , 'application/json');
    return this.http.put<any>(this.apiHost + 'api/BloodBankNews/publishNews', news, {headers: headers})
  }

  generate(): Observable<any> {
    const requestOptions: Object = {
      observe: 'response',
      responseType: 'blob'
    }
    return this.http.get<any>(this.apiHost + 'api/BloodConsumptionConfiguration/generatePdf', requestOptions);
  }

}
