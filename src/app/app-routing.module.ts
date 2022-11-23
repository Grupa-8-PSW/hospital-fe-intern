import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FeedbackDisplayComponent } from "./modules/hospital/feedback/feedback-display/feedback-display.component";
import { BloodBanksComponent } from "./modules/pages/bloodBanks/blood-banks/blood-banks.component";
import { CreateBloodBankComponent } from "./modules/pages/bloodBanks/create-blood-bank/create-blood-bank.component";
import { CreateEditExaminationComponent } from "./modules/examination/create-edit-examination/create-edit-examination.component";
import { CalendarComponent } from "./modules/pages/calendar/calendar.component";
import { ExaminationsComponent } from "./modules/pages/examinations/examinations.component";
import { HomeComponent } from "./modules/pages/home/home.component";
import { CheckBloodCountComponent } from "./modules/hospital/check-blood-count/check-blood-count.component";
import { CreateTreatmentHistoryComponent } from "./modules/treatment-history/create-treatment-history/create-treatment-history.component";
import { DischargePatientComponent } from "./modules/treatment-history/discharge-patient/discharge-patient.component";
import { PrescribeTherapyComponent } from "./modules/treatment-history/prescribe-therapy/prescribe-therapy.component";
import { ViewAllTreatmentHistoriesComponent } from "./modules/treatment-history/view-all-treatment-histories/view-all-treatment-histories.component";
import { ViewTreatmentHistoryComponent } from "./modules/treatment-history/view-treatment-history/view-treatment-history.component";
import { BloodComponent } from "./modules/pages/blood/blood.component";
import { ViewBloodRequestsComponent } from "./modules/pages/bloodBanks/view-blood-requests/view-blood-requests.component";
import { WrongRequestDialogComponent } from "./modules/pages/bloodBanks/wrong-request-dialog/wrong-request-dialog.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'examinations', component: ExaminationsComponent },
  { path: 'feedback/display', component : FeedbackDisplayComponent},
  { path: 'bloodBanks', component: BloodBanksComponent},
  { path: 'bloodBanks/add', component: CreateBloodBankComponent},
  { path: 'checkBlood', component: CheckBloodCountComponent},
  { path: 'examinations/create/:date/:month/:year', component: CreateEditExaminationComponent },
  { path: 'examinations/edit/:id', component: CreateEditExaminationComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'examinations/:day/:month/:year', component: ExaminationsComponent },
  { path: 'view/bloodRequest', component: ViewBloodRequestsComponent},
  { path: 'blood', component: BloodComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
