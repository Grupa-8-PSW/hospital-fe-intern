import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from "@angular/material-moment-adapter";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatTimepickerModule } from 'mat-timepicker';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [],
  imports: [
    MatTimepickerModule,
    CommonModule,
    NgxMaterialTimepickerModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatOptionModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    MatTimepickerModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatOptionModule,
    MatDialogModule,
    NgxMaterialTimepickerModule,
    MatStepperModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: {
      parse: {
        dateInput: "DD/MM/YYYY HH:mm"
      },
      display: {
        dateInput: "DD/MM/YYYY"
      }
    }},
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {strict: true}},
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class MaterialModule {}
