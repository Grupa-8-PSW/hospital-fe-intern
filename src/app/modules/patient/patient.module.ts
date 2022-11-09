import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsListComponent } from './patients-list/patients-list.component';



@NgModule({
  declarations: [
    PatientsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PatientsListComponent
  ]
})
export class PatientModule { }
