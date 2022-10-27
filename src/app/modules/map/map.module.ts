import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalComponent } from './hospital/hospital.component';
import { BuildingComponent } from './building/building.component';



@NgModule({
  declarations: [
    HospitalComponent,
    BuildingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MapModule { }
