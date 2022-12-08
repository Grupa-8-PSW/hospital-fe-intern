import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditExaminationComponent } from './create-edit-examination/create-edit-examination.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ExaminationsComponent } from '../pages/examinations/examinations.component';
import { AuthGuard } from '../auth/helpers/auth.guard';
import { RoleGuard } from '../auth/helpers/role.guard';
import { DoExaminationComponent } from './do-examination/do-examination.component';

const routes: Routes = [
  { path: 'examinations', component: ExaminationsComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] } },
  { path: 'examinations/create/:date/:month/:year', component: CreateEditExaminationComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] }  },
  { path: 'examinations/edit/:id', component: CreateEditExaminationComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] }  },
  { path: 'examinations/:day/:month/:year', component: ExaminationsComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] }  },
];


@NgModule({
  declarations: [
    CreateEditExaminationComponent,
    DoExaminationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ExaminationModule { }
