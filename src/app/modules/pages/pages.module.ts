import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ExaminationsComponent } from './examinations/examinations.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BloodBanksComponent } from './bloodBanks/blood-banks/blood-banks.component';
import { DialogComponent } from './bloodBanks/blood-banks/dialog/dialog.component';
@NgModule({
  declarations: [
    HomeComponent,
    ExaminationsComponent,
    BloodBanksComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }
