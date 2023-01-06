import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ExaminationDocument from 'src/app/model/ExaminationDocument';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExaminationDocumentService {
  url = 'http://localhost:3000/examinationDocuments';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<ExaminationDocument[]> {
    return this.http.get<ExaminationDocument[]>(this.url);
  }
}
