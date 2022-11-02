import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Examination } from '../hospital/model/examination';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {
  dataUrl = 'data/examinations.json';
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(
    private http: HttpClient
  ) { }

  addExamination(examination: Examination) : Observable<Array<Examination>> | null {
    let examinations: Array<Examination>;
    this.http.get<Array<Examination>>(this.dataUrl).subscribe({
      next: (data) => {
        examinations = data;
        examinations.push(examination);
        return this.http.post<Array<Examination>>(this.dataUrl, examinations, {
          headers: { 'Content-Type': 'application/json' }
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
    return null;
  }

  getExaminationsByDate(day:number, month:number, year:number): Observable<Examination[]> {
    return this.http.get<Examination[]>(this.apiHost + 'api/examination/' + day + '/' + month + "/" + year, {headers: this.headers});
  }
  
/*
  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiHost + 'api/rooms', {headers: this.headers});
  }

  getRoom(id: number): Observable<Room> {
    return this.http.get<Room>(this.apiHost + 'api/rooms/' + id, {headers: this.headers});
  }
*/
/*  getExaminations(): Observable<Examination[]> {
  /*  let examinations: Array<Examination>;
    this.http.get<Array<Examination>>(this.dataUrl).subscribe({
      next: (data) => {
        examinations = data;
        return this.http.post<Array<Examination>>(this.dataUrl, examinations, {
          headers: { 'Content-Type': 'application/json' }
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
    return new Observable<Examination[]>;
  }
}
 */  // return this.http.get<Examination[]>(this.apiHost + 'api/rooms', {headers: this.headers});
}