import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodListComponent } from './blood-list/blood-list.component';
import { MatTableModule } from '@angular/material/table';
import { BloodRequestComponent } from './blood-request/blood-request.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    BloodListComponent,
    BloodRequestComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MaterialModule
  ],
  exports: [
    BloodListComponent,
    BloodRequestComponent
  ]
})
export class BloodModule { }
