import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { SharedModule } from "../shared/shared.module";
import { FeedbackModule } from "./feedback/feedback.module";


const routes: Routes = [

];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    FeedbackModule
  ],
  exports: [ RouterModule ]
})
export class HospitalModule { }
