import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleConsiliumComponent } from './single-consilium/single-consilium.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    SingleConsiliumComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [
    SingleConsiliumComponent
  ]
})
export class ConsiliumModule { }
