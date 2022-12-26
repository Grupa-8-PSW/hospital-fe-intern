import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {

  apiHost = 'http://localhost:5131/';

  constructor(private http: HttpClient) { }


  GetBloodBetweenDatesForTenders(startTime: Date, endTime: Date): Observable<any>{
    const p = {'from': startTime.toString(), 'to': endTime.toString()};
    return this.http.get(this.apiHost + 'api/Tender/getAllBloodAmountsBetweenDates', { params: p});
  }
}
