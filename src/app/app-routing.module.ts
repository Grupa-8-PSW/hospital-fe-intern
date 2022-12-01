import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BloodBanksComponent } from "./modules/pages/bloodBanks/blood-banks/blood-banks.component";
import { CreateBloodBankComponent } from "./modules/pages/bloodBanks/create-blood-bank/create-blood-bank.component";
import { CalendarComponent } from "./modules/pages/calendar/calendar.component";
import { HomeComponent } from "./modules/pages/home/home.component";
import { AuthGuard } from "./modules/auth/helpers/auth.guard";
import { RoleGuard } from "./modules/auth/helpers/role.guard";
import { StatisticsComponent } from "./modules/pages/statistics/statistics.component";
import { CreateTreatmentHistoryComponent } from "./modules/treatment-history/create-treatment-history/create-treatment-history.component";
import { DischargePatientComponent } from "./modules/treatment-history/discharge-patient/discharge-patient.component";
import { PrescribeTherapyComponent } from "./modules/treatment-history/prescribe-therapy/prescribe-therapy.component";
import { ViewAllTreatmentHistoriesComponent } from "./modules/treatment-history/view-all-treatment-histories/view-all-treatment-histories.component";
import { ViewTreatmentHistoryComponent } from "./modules/treatment-history/view-treatment-history/view-treatment-history.component";
import { BloodComponent } from "./modules/pages/blood/blood.component";
import { ViewBloodRequestsComponent } from "./modules/pages/bloodBanks/view-blood-requests/view-blood-requests.component";
import { WrongRequestDialogComponent } from "./modules/pages/bloodBanks/wrong-request-dialog/wrong-request-dialog.component";
import { ExaminationsComponent } from "./modules/pages/examinations/examinations.component";
import { FeedbackDisplayComponent } from "./modules/hospital/feedback/feedback-display/feedback-display.component";
import { CreateEditExaminationComponent } from "./modules/examination/create-edit-examination/create-edit-examination.component";
import { UrgentRequestComponent } from "./modules/pages/bloodBanks/urgent-request/urgent-request.component";import { TendersComponent } from "./modules/pages/tenders/tenders.component";

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'examinations', component: ExaminationsComponent },
  { path: 'feedback/display', component : FeedbackDisplayComponent},
  { path: 'examinations/create/:date/:month/:year', component: CreateEditExaminationComponent },
  { path: 'examinations/edit/:id', component: CreateEditExaminationComponent },
  { path: 'examinations/:day/:month/:year', component: ExaminationsComponent },
  { path: 'view/bloodRequest', component: ViewBloodRequestsComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager'] },
  { path: 'tenders', component: TendersComponent}},
  { path: 'blood', component: BloodComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] }},
  { path: 'bloodBanks', component: BloodBanksComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager'] }},
  { path: 'bloodBanks/add', component: CreateBloodBankComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager'] }},
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] } },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'treatmentHistory/create', component: CreateTreatmentHistoryComponent},
  { path: 'treatmentHistory/dischargePatient/:id', component: DischargePatientComponent}, //treatment id
  { path: 'treatmentHistory/presctibeTherapy/:id', component: PrescribeTherapyComponent},
  { path: 'treatmentHistory/viewAll', component: ViewAllTreatmentHistoriesComponent},
  { path: 'treatmentHistory/view/:id', component: ViewTreatmentHistoryComponent},
  { path: 'bloodBanks/urgent', component: UrgentRequestComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
