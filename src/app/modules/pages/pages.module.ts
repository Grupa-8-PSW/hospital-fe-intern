import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ExaminationsComponent } from './examinations/examinations.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HospitalModule } from '../hospital/hospital.module';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    HomeComponent,
    ExaminationsComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    HospitalModule
  ]
})
export class PagesModule { }
