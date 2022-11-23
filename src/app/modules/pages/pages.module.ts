import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ExaminationsComponent } from './examinations/examinations.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BloodBanksComponent } from './bloodBanks/blood-banks/blood-banks.component';
import { DialogComponent } from './bloodBanks/blood-banks/dialog/dialog.component';
import { HospitalModule } from '../hospital/hospital.module';
import { CalendarComponent } from './calendar/calendar.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BloodModule } from '../blood/blood.module';
import { BloodComponent } from './blood/blood.component';
import { PatientModule } from '../patient/patient.module';

@NgModule({
  declarations: [
    HomeComponent,
    ExaminationsComponent,
    BloodBanksComponent,
    DialogComponent,
    CalendarComponent,
    BloodComponent,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    HospitalModule,
    FlexLayoutModule,
    BloodModule,
    PatientModule,
  ]
})

export class PagesModule { }
