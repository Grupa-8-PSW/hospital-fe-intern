import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './floor/form/form.component';
import { RoomsComponent } from './floor/rooms/rooms.component';



@NgModule({
  declarations: [
    FormComponent,
    RoomsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MapModule { }
