import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditExaminationComponent } from './create-edit-examination/create-edit-examination.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CreateEditExaminationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExaminationModule { }
