import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodBank } from 'src/app/modules/hospital/model/bloodBank.model';

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {

  apiHost: string = 'http://localhost:5131/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createBloodBank(bloodBank: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/BloodBanks/', bloodBank, {'headers': this.headers});
  }

  getBloodBanks(): Observable<BloodBank[]> {
    return this.http.get<BloodBank[]>(this.apiHost + 'api/BloodBanks', {headers: this.headers});
  }

  checkBloodAvailabilty(bank: BloodBank, type: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('bloodBankId', bank.id);
    queryParams = queryParams.append('bloodType', type);
    return this.http.get<boolean>(this.apiHost + 'api/BloodBankConnection', {params: queryParams, headers: this.headers}).subscribe(res=> {
      console.log(res)
    });
  }
}
