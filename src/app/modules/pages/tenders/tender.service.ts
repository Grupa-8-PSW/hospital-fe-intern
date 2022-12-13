import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Tender from 'src/app/model/tender';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TenderService {
  apiHost: string = 'http://localhost:5131/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) { }

  getTenders(): Observable<any> {
      return this.http.get<any>(this.apiHost + 'api/Tender/getAllForOffers/',  {'headers': this.headers});
  }

  getOffersForTender(id: any): Observable<any> {
    return this.http.get<any>(this.apiHost + 'getOffersForTender?tenderID='+ id,  {'headers': this.headers});
   }

  acceptOfferForTender(off: any): Observable<any> {
        
    return this.http.post(this.apiHost + 'acceptOffer', off, { headers: this.headers });
  }

  public createTender(tender: Tender): void {
    console.log(tender);
    this.http.post(this.apiHost + 'api/Tender', tender, {headers: this.headers}).subscribe(res => {
      console.log('Sent!');
      this.router.navigate(['/allTenders']);
    })
  }
}
