import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodListComponent } from './blood-list/blood-list.component';
import { MatTableModule } from '@angular/material/table';
import { BloodRequestComponent } from './blood-request/blood-request.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BloodRequestListComponent } from './blood-request-list/blood-request-list.component';



@NgModule({
  declarations: [
    BloodListComponent,
    BloodRequestComponent,
    BloodRequestListComponent
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
