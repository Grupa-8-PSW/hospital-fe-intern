import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodListComponent } from './blood-list/blood-list.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    BloodListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    BloodListComponent
  ]
})
export class BloodModule { }
