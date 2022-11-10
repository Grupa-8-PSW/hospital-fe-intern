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
import { FormsModule } from "@angular/forms";
import { CreateBloodBankComponent } from "./modules/pages/bloodBanks/create-blood-bank/create-blood-bank.component";
import {ToastrModule} from 'ngx-toastr';
import { ExaminationModule } from "./modules/examination/examination.module";
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ScheduleComponentComponent } from './modules/pages/bloodBanks/schedule-component/schedule-component.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CreateBloodBankComponent,
    ScheduleComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    PagesModule,
    HospitalModule,
    SharedModule,
    FormsModule,
    ToastrModule.forRoot(),
    ExaminationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
