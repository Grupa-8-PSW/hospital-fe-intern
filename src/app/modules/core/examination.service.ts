import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Examination from '../hospital/model/examination';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {
  dataUrl = 'data/examinations.json';

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
}
