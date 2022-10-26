import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackApprovalComponent } from './feedback-approval/feedback-approval/feedback-approval.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'manager/feedback-approval', component: FeedbackApprovalComponent }
];

@NgModule({
  declarations: [
    FeedbackApprovalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ManagerModule { }
