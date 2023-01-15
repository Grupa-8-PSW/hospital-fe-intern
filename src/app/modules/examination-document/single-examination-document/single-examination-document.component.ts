import { Component, Input } from '@angular/core';
import ExaminationDocument from 'src/app/model/ExaminationDocument';

@Component({
  selector: 'app-single-examination-document',
  templateUrl: './single-examination-document.component.html',
  styleUrls: ['./single-examination-document.component.css']
})
export class SingleExaminationDocumentComponent {
  @Input("examinationDocument") examinationDocument!: ExaminationDocument;
  panelOpenState = false;
}
