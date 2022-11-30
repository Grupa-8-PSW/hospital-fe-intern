import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { HospitalModule } from "./modules/hospital/hospital.module";
import { PagesModule } from "./modules/pages/pages.module";
import { SharedModule } from "./modules/shared/shared.module";
import { CreateBloodBankComponent } from "./modules/pages/bloodBanks/create-blood-bank/create-blood-bank.component";
import { ExaminationModule } from "./modules/examination/examination.module";
import { AuthModule } from "./modules/auth/auth.module";
import { JwtInterceptor } from "./modules/auth/helpers/jwt.interceptor";
import { JwtModule } from "@auth0/angular-jwt";
import { NgChartsModule } from 'ng2-charts';
import { DoctorModule } from "./modules/doctor/doctor.module";
import { TreatmentHistoryModule } from "./modules/treatment-history/treatment-history.module";
import { BloodModule } from "./modules/blood/blood.module";
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TendersComponent } from './modules/pages/tenders/tenders.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CreateBloodBankComponent,
    TendersComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    PagesModule,
    HospitalModule,
    AuthModule,
    SharedModule,
    FormsModule,
    ToastrModule.forRoot(),
    ExaminationModule,
    FlexLayoutModule,
    NgChartsModule,
    DoctorModule,
    TreatmentHistoryModule,
    BloodModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token')
      }
    }),

  ],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
