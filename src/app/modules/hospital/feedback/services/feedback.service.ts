import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback, FeedbackStatus } from '../model/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  apiHost: string = 'http://localhost:5174/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getPublicFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.apiHost + 'api/internal/Feedback/public', { headers: this.headers });
  }

  getAllFeedbacks(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.apiHost+'api/internal/Feedback', {headers:this.headers});
  }

  changeStatus(id: number, status: FeedbackStatus): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/internal/Feedback/' + id + '/status?feedbackStatus=' + status, { headers: this.headers });
  }

}
