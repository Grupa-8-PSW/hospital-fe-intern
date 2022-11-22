import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { NgChartsModule } from 'ng2-charts';
import { GraphStatisticsComponent } from './graph-statistics/graph-statistics.component';

@NgModule({
  declarations: [
    PatientsListComponent,
    GraphStatisticsComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [
    PatientsListComponent,
    GraphStatisticsComponent
  ]
})
export class PatientModule { }
