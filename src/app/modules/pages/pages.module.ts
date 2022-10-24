import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { HomeComponent } from './home/home.component';
import { ExaminationsComponent } from './examinations/examinations.component';

@NgModule({
  declarations: [
    HomeComponent,
    ExaminationsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class PagesModule { }
