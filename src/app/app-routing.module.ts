import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BloodBanksComponent } from "./modules/pages/bloodBanks/blood-banks/blood-banks.component";
import { CreateBloodBankComponent } from "./modules/pages/bloodBanks/create-blood-bank/create-blood-bank.component";
import { CalendarComponent } from "./modules/pages/calendar/calendar.component";
import { HomeComponent } from "./modules/pages/home/home.component";
import { CheckBloodCountComponent } from "./modules/hospital/check-blood-count/check-blood-count.component";
import { AuthGuard } from "./modules/auth/helpers/auth.guard";
import { RoleGuard } from "./modules/auth/helpers/role.guard";
import { StatisticsComponent } from "./modules/pages/statistics/statistics.component";
import { CreateTreatmentHistoryComponent } from "./modules/treatment-history/create-treatment-history/create-treatment-history.component";
import { DischargePatientComponent } from "./modules/treatment-history/discharge-patient/discharge-patient.component";
import { PrescribeTherapyComponent } from "./modules/treatment-history/prescribe-therapy/prescribe-therapy.component";
import { ViewAllTreatmentHistoriesComponent } from "./modules/treatment-history/view-all-treatment-histories/view-all-treatment-histories.component";
import { ViewTreatmentHistoryComponent } from "./modules/treatment-history/view-treatment-history/view-treatment-history.component";
import { BloodComponent } from "./modules/pages/blood/blood.component";
import { ExaminationsComponent } from "./modules/pages/examinations/examinations.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bloodBanks', component: BloodBanksComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager'] }},
  { path: 'bloodBanks/add', component: CreateBloodBankComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager'] }},
  { path: 'checkBlood', component: CheckBloodCountComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager'] }},
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] } },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'treatmentHistory/create', component: CreateTreatmentHistoryComponent},
  { path: 'treatmentHistory/dischargePatient/:id', component: DischargePatientComponent}, //treatment id
  { path: 'treatmentHistory/presctibeTherapy/:id', component: PrescribeTherapyComponent},
  { path: 'treatmentHistory/viewAll', component: ViewAllTreatmentHistoriesComponent},
  { path: 'treatmentHistory/view/:id', component: ViewTreatmentHistoryComponent},
  { path: 'examinations/:day/:month/:year', component: ExaminationsComponent },
  { path: 'blood', component: BloodComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
