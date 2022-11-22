import { formatDate } from './../../../shared/util/util';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BloodUnitRequest } from 'src/app/model/bloodUnitRequest';

@Injectable({
  providedIn: 'root'
})
export class BloodRequestServiceService {

  apiHost: string = 'http://localhost:5131/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getBloodRequests(): Observable<any> {
    return this.http.get(this.apiHost + "api/BloodUnitRequest", {headers: this.headers});
  }

  changeRequestStatus(request: any){
        //console.log(request);
        let time = new Date(request.creationDate).getTime();
        let day = new Date(request.creationDate).getDate();
        let month = new Date(request.creationDate).getMonth() + 1;
        let year = new Date(request.creationDate).getFullYear();
        let newFormat = `${day}/${month}/${year}`;
        request.creationDate = newFormat;
        console.log(request.creationDate);
    return this.http.put<any>(this.apiHost + 'api/BloodUnitRequest', request, {headers: this.headers})
  }
}
