import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { RoomsComponent } from './rooms/rooms.component';


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
