import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodListComponent } from './blood-list/blood-list.component';
import { MatTableModule } from '@angular/material/table';
import { BloodRequestComponent } from './blood-request/blood-request.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BloodRequestListComponent } from './blood-request-list/blood-request-list.component';
import { BloodRequestEditDialogComponent } from './blood-request-edit-dialog/blood-request-edit-dialog.component';
import { BloodRequestDoctorViewComponent } from './blood-request-doctor-view/blood-request-doctor-view.component';



@NgModule({
  declarations: [
    BloodListComponent,
    BloodRequestComponent,
    BloodRequestListComponent,
    BloodRequestEditDialogComponent,
    BloodRequestDoctorViewComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MaterialModule
  ],
  exports: [
    BloodListComponent,
    BloodRequestComponent,
    BloodRequestListComponent
  ]
})
export class BloodModule { }
