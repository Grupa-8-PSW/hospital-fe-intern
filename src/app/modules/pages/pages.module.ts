import { NgxRerenderModule } from 'ngx-rerender';
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
import { FormsModule } from '@angular/forms';
import { ScheduleDialogComponent } from './bloodBanks/schedule-dialog/schedule-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ViewBloodRequestsComponent } from './bloodBanks/view-blood-requests/view-blood-requests.component';
import { BloodTypePipe } from './bloodBanks/pipes/blood-type.pipe';
import { BloodModule } from '../blood/blood.module';
import { BloodComponent } from './blood/blood.component';
import { TendersComponent } from './tenders/tenders.component';
import { StatisticsComponent } from './statistics/statistics.component'
import { PatientModule } from '../patient/patient.module';
import { ConsiliumsComponent } from './consiliums/consiliums.component';
import { ConsiliumModule } from '../consilium/consilium.module';
import { UrgentRequestComponent } from './bloodBanks/urgent-request/urgent-request.component';
import { MonthlySubscriptionComponent } from './bloodBanks/monthly-subscription/monthly-subscription.component';
import { ChartsComponent } from './bloodBanks/charts/charts.component';
import { NewsComponent } from './bloodBanks/news/news.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent,
    ExaminationsComponent,
    BloodBanksComponent,
    DialogComponent,
    CalendarComponent,
    ScheduleDialogComponent,
    BloodComponent,
    ViewBloodRequestsComponent,
    BloodTypePipe,
    TendersComponent,
    BloodComponent,
    StatisticsComponent,
    ConsiliumsComponent,
    UrgentRequestComponent,
    MonthlySubscriptionComponent,
    ChartsComponent,
    NewsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    HospitalModule,
    FlexLayoutModule,
    BloodModule,
    NgxRerenderModule,
    PatientModule,
    ConsiliumModule,
    NgbModule,
    NgbCarouselModule
  ]
})

export class PagesModule { }
