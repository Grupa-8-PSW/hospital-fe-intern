import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackApprovalComponent } from './feedback-approval/feedback-approval.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { FeedbackDisplayComponent } from './feedback-display/feedback-display.component';
import { AuthGuard } from 'src/app/modules/auth/helpers/auth.guard';
import { RoleGuard } from 'src/app/modules/auth/helpers/role.guard';

const routes: Routes = [
  { path: 'feedback/approval', component: FeedbackApprovalComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager']} },
  { path: 'feedback/display', component : FeedbackDisplayComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager']} },
];

@NgModule({
  declarations: [
    FeedbackApprovalComponent,
    FeedbackDisplayComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class FeedbackModule { }
