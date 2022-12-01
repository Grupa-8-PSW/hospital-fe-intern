import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { NgChartsModule } from 'ng2-charts';
import { GraphStatisticsComponent } from './graph-statistics/graph-statistics.component';
import { PatientsOfDoctorStatisticsComponent } from './patients-of-doctor-statistics/patients-of-doctor-statistics.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    PatientsListComponent,
    GraphStatisticsComponent,
    PatientsOfDoctorStatisticsComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    PatientsListComponent,
    GraphStatisticsComponent,
    PatientsOfDoctorStatisticsComponent
  ]
})
export class PatientModule { }
