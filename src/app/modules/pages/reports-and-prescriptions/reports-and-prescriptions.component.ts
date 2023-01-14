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
  errorFetchingExaminationDocuments?: string | null;
  searchText: string = '';

  constructor(
    private examinationDocumentService: ExaminationDocumentService
  ) { }

  ngOnInit(): void {
    this.fetchExaminationDocuments();
  }

  handleSearch(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.fetchExaminationDocuments();
    }
  }

  fetchExaminationDocuments(): void {
    this.fetchingExaminationDocuments = true;
      this.examinationDocumentService.searchExaminationDocuments(this.searchText).subscribe({
        next: (data) => {
          this.fetchingExaminationDocuments = false;
          this.examinationDocuments = data;
        },
        error: (err) => {
          console.log(err);
          this.fetchingExaminationDocuments = false;
          this.errorFetchingExaminationDocuments = err.error.message ? err.error.message : 'Error fetching examination documents';
        }
      });
  }

}
