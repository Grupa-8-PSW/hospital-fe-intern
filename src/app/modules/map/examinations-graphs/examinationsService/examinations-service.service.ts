import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Examination from 'src/app/modules/hospital/model/examination';

@Injectable({
  providedIn: 'root'
})
export class ExaminationsServiceService {
  apiHost: string = 'http://localhost:5174/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getExaminationsByMonth(id): Observable<Examination[]> {
    return this.http.get<Examination[]>(this.apiHost + 'api/Examination/monthly/examinations?month=' + id, { headers: this.headers });
  }
}
