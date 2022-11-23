import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { CreateTreatmentHistoryComponent } from './create-treatment-history/create-treatment-history.component';
import { ViewAllTreatmentHistoriesComponent } from './view-all-treatment-histories/view-all-treatment-histories.component';
import { ViewTreatmentHistoryComponent } from './view-treatment-history/view-treatment-history.component';
import { HospitalModule } from '../hospital/hospital.module';
import { DischargePatientComponent } from './discharge-patient/discharge-patient.component';
import { PrescribeTherapyComponent } from './prescribe-therapy/prescribe-therapy.component';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [
    CreateTreatmentHistoryComponent, 
    ViewAllTreatmentHistoriesComponent,
    ViewTreatmentHistoryComponent,
    DischargePatientComponent,
    PrescribeTherapyComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HospitalModule,
    MatRadioModule
  ]
})
export class TreatmentHistoryModule { }
