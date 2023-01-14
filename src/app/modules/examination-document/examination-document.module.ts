import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleExaminationDocumentComponent } from './single-examination-document/single-examination-document.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    SingleExaminationDocumentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SingleExaminationDocumentComponent
  ]
})
export class ExaminationDocumentModule { }
