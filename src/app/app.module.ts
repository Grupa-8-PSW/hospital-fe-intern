import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { HospitalModule } from "./modules/hospital/hospital.module";
import { PagesModule } from "./modules/pages/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./modules/shared/shared.module";
import { SignatureComponent } from "./modules/map/rooms/rooms.component";
import { FormComponent } from "./modules/map/form/form.component";
import { BlankComponent } from './modules/map/blank/blank.component';
import { FloorsComponent } from './modules/map/floors/floors.component';

@NgModule({
  declarations: [
    AppComponent,
    SignatureComponent,
    FormComponent,
    BlankComponent,
    FloorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    PagesModule,
    HospitalModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
