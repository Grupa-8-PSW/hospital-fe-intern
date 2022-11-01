import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackApprovalComponent } from './feedback-approval/feedback-approval.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';

const routes: Routes = [
  { path: 'feedback/approval', component: FeedbackApprovalComponent }
];

@NgModule({
  declarations: [
    FeedbackApprovalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class FeedbackModule { }
