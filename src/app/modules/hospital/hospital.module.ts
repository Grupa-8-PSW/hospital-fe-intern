import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { AddEditExaminationComponent } from "./examinations/add-edit-examination/add-edit-examination.component";
import { CheckBloodCountComponent } from './check-blood-count/check-blood-count.component';

const routes: Routes = [

];

@NgModule({
  declarations: [
    AddEditExaminationComponent,
    CheckBloodCountComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FeedbackModule
  ],
  exports: [ RouterModule ]
})
export class HospitalModule { }
