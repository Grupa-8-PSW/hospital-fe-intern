import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-check-blood-count',
  templateUrl: './check-blood-count.component.html',
  styleUrls: ['./check-blood-count.component.css']
})
export class CheckBloodCountComponent implements OnInit {

  apiHost: string = 'http://localhost:7131/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  bank = '';
  bloodType = '';
  quantity = '';
  Banks: any;

  

  fetchData(){
    let params = new HttpParams().set("api", this.bank).set("bloodType", this.bloodType).set("quantity", this.quantity);
    this.http.get('https://localhost:7131/CheckBloodAmount', {headers: this.headers, params: params}).subscribe(data => {
      console.log(data);
    })
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:7131/api/BloodBanks').subscribe(data => {
      console.log(data);
      this.Banks = data;
    })
  }

}
