import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import ExaminationDocument from 'src/app/model/ExaminationDocument';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ExaminationDocumentService {
  url = `${environment.apiUrL}/internal/ExaminationDocument`;

  constructor(
    private http: HttpClient
  ) { }

  searchExaminationDocuments(searchText: string): Observable<ExaminationDocument[]> {
    return this.http.get<ExaminationDocument[]>(`${this.url}?searchText=${searchText}`)
      .pipe(map((col) => col.map(doc => {
        return {
          from: moment(doc.from),
          to: moment(doc.to),
          patient: doc.patient,
          doctor: doc.doctor,
          report: doc.report,
          prescriptions: doc.prescriptions
        }
      })));
  }
}
