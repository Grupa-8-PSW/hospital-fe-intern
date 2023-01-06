import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import ExaminationDocument from 'src/app/model/ExaminationDocument';
import { ExaminationDocumentService } from '../../examination-document/examination-document.service';

@Component({
  selector: 'app-reports-and-prescriptions',
  templateUrl: './reports-and-prescriptions.component.html',
  styleUrls: ['./reports-and-prescriptions.component.css']
})
export class ReportsAndPrescriptionsComponent implements OnInit {
  examinationDocuments?: ExaminationDocument[];
  fetchingExaminationDocuments = false;
  errorFetchingExaminationDocuments?: string;

  constructor(
    private examinationDocumentService: ExaminationDocumentService
  ) { }

  ngOnInit(): void {
    this.fetchingExaminationDocuments = true;
    this.examinationDocumentService.getAll().subscribe({
      next: (data) => {
        this.fetchingExaminationDocuments = false;
        this.examinationDocuments = data;
      },
      error: (err) => {
        console.log(err);
        this.fetchingExaminationDocuments = false;
        this.errorFetchingExaminationDocuments = err.error ? err.error.message : 'Error fetching examination documents';
      }
    });
  }

}
