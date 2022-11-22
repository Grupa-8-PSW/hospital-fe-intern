import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FeedbackDisplayComponent } from "./modules/hospital/feedback/feedback-display/feedback-display.component";
import { BloodBanksComponent } from "./modules/pages/bloodBanks/blood-banks/blood-banks.component";
import { CreateBloodBankComponent } from "./modules/pages/bloodBanks/create-blood-bank/create-blood-bank.component";
import { CreateEditExaminationComponent } from "./modules/examination/create-edit-examination/create-edit-examination.component";
import { CalendarComponent } from "./modules/pages/calendar/calendar.component";
import { ExaminationsComponent } from "./modules/pages/examinations/examinations.component";
import { HomeComponent } from "./modules/pages/home/home.component";
import { CheckBloodCountComponent } from "./modules/hospital/check-blood-count/check-blood-count.component";
import { ViewBloodRequestsComponent } from "./modules/pages/bloodBanks/view-blood-requests/view-blood-requests.component";

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
  { path: 'viewBloodRequests', component: ViewBloodRequestsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
