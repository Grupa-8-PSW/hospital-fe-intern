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
import { BlankComponent } from './modules/map/blank/blank.component';
import { FloorsComponent } from './modules/map/floors/floors.component';
import { BuildingService } from "./modules/map/building/buildingService/building.service";
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    SignatureComponent,
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
    SharedModule,
    MatProgressBarModule
  ],
  providers: [BuildingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
