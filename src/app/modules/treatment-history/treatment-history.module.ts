import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTreatmentHistoryComponent } from './create-treatment-history/create-treatment-history.component';
import { ViewAllTreatmentHistoriesComponent } from './view-all-treatment-histories/view-all-treatment-histories.component';
import { ViewTreatmentHistoryComponent } from './view-treatment-history/view-treatment-history.component';



@NgModule({
  declarations: [
    CreateTreatmentHistoryComponent,
    ViewAllTreatmentHistoriesComponent,
    ViewTreatmentHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TreatmentHistoryModule { }
