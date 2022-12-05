import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, map } from 'rxjs';
import Consilium from './model/Consilium';
import ConsiliumResponse from './model/ConsiliumResponse';

@Injectable({
  providedIn: 'root'
})
export class ConsiliumService {
  url = "http://localhost:3000/consiliums";

  constructor(
    private http: HttpClient
  ) { }

  GetAllConsiliums(): Observable<Consilium[]> {
    return this.http.get<ConsiliumResponse[]>(this.url).pipe(
      map((consiliums) => this.toClient(consiliums))
    );
  }

  toClient(consiliums: ConsiliumResponse[]): Consilium[] {
    return consiliums.map(consilium => {
      return {
        id: consilium.id,
        subject: consilium.subject,
        from: moment(consilium.from),
        to: moment(consilium.to),
        duration: consilium.duration,
        participants: consilium.participants
      }
    });
  }
}
