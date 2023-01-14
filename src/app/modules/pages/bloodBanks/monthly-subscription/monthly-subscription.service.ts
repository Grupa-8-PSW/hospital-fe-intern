import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import MonthlySubscription from 'src/app/model/monthlySubscription';
import { sub } from 'date-fns';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MonthlySubscriptionService {

  apiHost: string = 'http://localhost:5131/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  postSubscription(subscription: MonthlySubscription): void {
    this.http.post(this.apiHost + 'api/MonthlySubscription', subscription, {headers: this.headers}).subscribe(response => {
      console.log(subscription);
      console.log("Sent!");
    },
    err => {
      this.toastr.success("Created!");
    })
  }
}
