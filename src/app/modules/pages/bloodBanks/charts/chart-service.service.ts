import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrgentRequestBloodBankStatistic } from 'src/app/model/urgentRequestBloodBankStatistic';

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {
  generateTenderPDF(startDate: Date, endDate: Date) {
    throw new Error('Method not implemented.');
  }

  apiHost = 'http://localhost:5131/';

  constructor(private http: HttpClient) { }


  GetBloodBetweenDatesForTenders(startTime: Date, endTime: Date): Observable<any>{
    const p = {'from': startTime.toString(), 'to': endTime.toString()};
    return this.http.get(this.apiHost + 'api/Tender/getAllBloodAmountsBetweenDates', { params: p});
  }

  GetBloodBetweenDatesForUrgentRequest(startTime: Date, endTime: Date): Observable<any>{
    const p = {'from': startTime.toString(), 'to': endTime.toString()};
    return this.http.get<any>(this.apiHost + 'api/UrgentRequest/getData', { params: p});
  }

  GetQuantitiesPerBloodTypeStatistic(startTime: Date, endTime: Date) : Observable<any> {
    const p = {'from': startTime.toString(), 'to': endTime.toString()};
    return this.http.get<any>(this.apiHost + 'api/UrgentRequest/getQuantitiesPerTypeStatistic', { params: p});
  }

  GetQuantitiesPerBloodTypeStatisticForBank(id: any, startTime: Date, endTime: Date) : Observable<any> {
    const p = {'bloodBankid' : id, 'from': startTime.toString(), 'to': endTime.toString()};
    return this.http.get<any>(this.apiHost + 'api/UrgentRequest/getQuantitiesPerTypeStatisticForBloodBank', { params: p});
  }

  GetTenderStatisticPDF(startTime: Date, endTime: Date): Observable<any> {
    const p = {'from': startTime.toString(), 'to': endTime.toString()};
    return this.http.get<any>(this.apiHost + 'api/Tender/getTenderStatisticPDF', { params: p});
  }
}
