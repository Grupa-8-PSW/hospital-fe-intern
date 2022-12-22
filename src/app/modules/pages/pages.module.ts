import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ExaminationsComponent } from './examinations/examinations.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MapComponent } from './map/map.component';
import { TenderChartsComponent } from './tender-charts/tender-charts.component';

@NgModule({
  declarations: [
    HomeComponent,
    ExaminationsComponent,
    MapComponent,
    TenderChartsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }
