import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { ExaminationModule } from "./modules/examination/examination.module";
import { HospitalModule } from "./modules/hospital/hospital.module";
import { CreateBloodBankComponent } from "./modules/pages/bloodBanks/create-blood-bank/create-blood-bank.component";
import { PagesModule } from "./modules/pages/pages.module";
import { SharedModule } from "./modules/shared/shared.module";

import { TreatmentHistoryModule } from "./modules/treatment-history/treatment-history.module";
import { BloodModule } from "./modules/blood/blood.module";

@NgModule({
  declarations: [
    AppComponent,
    CreateBloodBankComponent,
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
    ExaminationModule,
    FlexLayoutModule,
    TreatmentHistoryModule,
    BloodModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
