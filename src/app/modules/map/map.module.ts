import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalComponent } from './hospital/hospital.component';
import { BuildingComponent } from './building/building.component';
import { RoomsComponent } from './floor/rooms/rooms.component';
import { FormComponent } from './floor/form/form.component';



@NgModule({
  declarations: [
    HospitalComponent,
    BuildingComponent,
    RoomsComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MapModule { }
