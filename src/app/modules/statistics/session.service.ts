import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import RenovationSession from "../map/model/renovation-session.model";

@Injectable({
    providedIn: 'root'
  })
  export class SessionService {
    apiHost: string = 'http://localhost:5174/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    constructor(private http: HttpClient) { }
  
    getSessions(): Observable<RenovationSession[]> {
      return this.http.get<RenovationSession[]>(this.apiHost + 'api/statistics/renovation/views', { headers: this.headers });
    }

    getSessionAvg(): Observable<number[]> {
      return this.http.get<number[]>(this.apiHost + 'api/statistics/renovation/views/avg', { headers: this.headers });
    }

    getSessionSum(): Observable<number[]> {
      return this.http.get<number[]>(this.apiHost + 'api/statistics/renovation/views/sum', { headers: this.headers });
    }
    
  }