import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import BloodTender from 'src/app/model/bloodTenders';
@Injectable({
  providedIn: 'root'
})
export class TenderGraphsService {
  apiHost:string= 'http://localhost:5174/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { 

  }

  GetBloodGraph(year: number, bloodType:string){
  
    return this.http.get<BloodTender>(this.apiHost+ 'api/internal/Blood/'+ year+'/'+ bloodType,{headers:this.headers})
  }
  GetBloodGraph1(year: number){
  
    return this.http.get<BloodTender>(this.apiHost+ 'api/internal/Blood/money/'+ year,{headers:this.headers})
  }
}
