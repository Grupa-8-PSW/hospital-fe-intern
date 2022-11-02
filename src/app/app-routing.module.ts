import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateEditExaminationComponent } from "./modules/examination/create-edit-examination/create-edit-examination.component";
import { CalendarComponent } from "./modules/pages/calendar/calendar.component";
import { ExaminationsComponent } from "./modules/pages/examinations/examinations.component";
import { HomeComponent } from "./modules/pages/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'examinations', component: ExaminationsComponent },
  { path: 'examinations/create/:date/:month/:year', component: CreateEditExaminationComponent },
  { path: 'examinations/edit/:id', component: CreateEditExaminationComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'examinations/:day/:month/:year', component: ExaminationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
