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
import { ConsiliumsComponent } from "./modules/pages/consiliums/consiliums.component";
import { AllTendersComponent } from "./modules/pages/tenders/all-tenders/all-tenders.component";
import { UrgentRequestComponent } from "./modules/pages/bloodBanks/urgent-request/urgent-request.component";import { TendersComponent } from "./modules/pages/tenders/tenders.component";
import { MonthlySubscriptionComponent } from "./modules/pages/bloodBanks/monthly-subscription/monthly-subscription.component";
import { DoExaminationComponent } from "./modules/examination/do-examination/do-examination.component";
import { ReportsAndPrescriptionsComponent } from "./modules/pages/reports-and-prescriptions/reports-and-prescriptions.component";
import { ChartsComponent } from "./modules/pages/bloodBanks/charts/charts.component";
import { NewsComponent } from "./modules/pages/bloodBanks/news/news.component";
import { BuildingComponent } from "./modules/map/building/building.component";
import { FloorsComponent } from "./modules/map/floors/floors.component";
import { SignatureComponent } from "./modules/map/rooms/rooms.component";
import { EventStatisticComponent } from "./modules/pages/user-event-statistics/event-statistic/event-statistic.component";



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: BuildingComponent },
  { path: 'examinations', component: ExaminationsComponent },
  { path: 'feedback/display', component : FeedbackDisplayComponent},
  { path: 'examinations/create/:date/:month/:year', component: CreateEditExaminationComponent },
  { path: 'examinations/edit/:id', component: CreateEditExaminationComponent },
  { path: 'examinations/:day/:month/:year', component: ExaminationsComponent },
  { path: 'view/bloodRequest', component: ViewBloodRequestsComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager'] }},
  { path: 'tenders', component: TendersComponent},
  { path: 'blood', component: BloodComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] }},
  { path: 'bloodBanks', component: BloodBanksComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager'] }},
  { path: 'bloodBanks/add', component: CreateBloodBankComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager'] }},
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] } },
  // { path: 'checkBlood', component: CheckBloodCountComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager'] }},
  //{ path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] } },
  { path: 'calendar', component: CalendarComponent},
  { path: 'statistics', component: StatisticsComponent },
  { path: 'treatmentHistory/create', component: CreateTreatmentHistoryComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] }},
  { path: 'treatmentHistory/dischargePatient/:id', component: DischargePatientComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] }}, //treatment id
  { path: 'treatmentHistory/presctibeTherapy/:id', component: PrescribeTherapyComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] }},
  { path: 'treatmentHistory/viewAll', component: ViewAllTreatmentHistoriesComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] }},
  { path: 'treatmentHistory/view/:id', component: ViewTreatmentHistoryComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] }},
  { path: 'examinations/:day/:month/:year', component: ExaminationsComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] }},
  { path: 'blood', component: BloodComponent, canActivate: [AuthGuard]},
  { path: 'consiliums', component: ConsiliumsComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] }},
  { path: 'treatmentHistory/create', component: CreateTreatmentHistoryComponent},
  { path: 'treatmentHistory/dischargePatient/:id', component: DischargePatientComponent}, //treatment id
  { path: 'treatmentHistory/presctibeTherapy/:id', component: PrescribeTherapyComponent},
  { path: 'treatmentHistory/viewAll', component: ViewAllTreatmentHistoriesComponent},
  { path: 'treatmentHistory/view/:id', component: ViewTreatmentHistoryComponent},
  { path: 'bloodBanks/urgent', component: UrgentRequestComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager'] }},
  { path: 'bloodBanks/monthlySubscription', component: MonthlySubscriptionComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager']}},
  { path: 'allTenders', component: AllTendersComponent},
  { path: 'bloodBanks/urgent', component: UrgentRequestComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager'] }},
  { path: 'examinations/do', component: DoExaminationComponent},
  { path: 'reportsAndPrescriptions', component: ReportsAndPrescriptionsComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] }},
  { path: 'bloodBanks/charts', component: ChartsComponent},
  { path: 'bloodBanks/news', component: NewsComponent},
  { path: 'map/floor/:id', component: FloorsComponent },
  { path: 'map/floor/rooms/:floorId', component: SignatureComponent },
  { path: 'map/floor/rooms/:floorId/:roomId', component: SignatureComponent },
  { path: 'appointment/event/statistic', component: EventStatisticComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager'] }}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
