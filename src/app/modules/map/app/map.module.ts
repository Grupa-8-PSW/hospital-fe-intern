import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MapComponent } from './map.component';
import { SignatureComponent } from './signature/signature.component';
import { FormComponent } from './form/form.component';





@NgModule({
  declarations: [
    MapComponent,
    SignatureComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,


  ],
  providers: [],
  bootstrap: [MapComponent]
})
export class MapModule { }
