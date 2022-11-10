import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { BloodConsumptionReport } from 'src/app/model/BloodConsumptionReport';
import { ScheduleReportsService } from '../services/schedule-reports.service';
import { DOCUMENT } from '@angular/common'; 
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-schedule-component',
  templateUrl: './schedule-component.component.html',
  styleUrls: ['./schedule-component.component.css']
})
export class ScheduleComponentComponent implements OnInit {

  public bloodConsumptionReport: BloodConsumptionReport = new BloodConsumptionReport();
  public time: any;
  public day: any;
  public StartTime: any;

  constructor(
              private router: Router,
              private reportService: ScheduleReportsService,
              private _formBuilder: FormBuilder,
              @Inject(DOCUMENT) document: Document) {
                document.getElementById('el');
               }

  ngOnInit(): void {
  }

  schedule(): void {
    this.bloodConsumptionReport.startTime = this.time;
    window.alert(this.time);
      this.reportService.createReport(this.bloodConsumptionReport).subscribe((res => {
 
    }));

  } 

  scheduleWeekly(): void {
    window.alert(this.StartTime);
  }

  clickedDaily() {
    var daily = document.getElementById('dailyDiv') as HTMLElement;
    daily.className="btn btn-danger";
    daily.click();

    var monthly = document.getElementById('monthlyDiv') as HTMLElement;
    monthly.className="btn btn-dark";

    var weekly = document.getElementById('weeklyDiv') as HTMLElement;
    weekly.className="btn btn-dark";

    var annual = document.getElementById('annualDiv') as HTMLElement;
    annual.className="btn btn-dark";

  }

  clickedWeekly() {
    var weekly = document.getElementById('weeklyDiv') as HTMLElement;
    weekly.className="btn btn-danger";
    weekly.click();
   
    var daily = document.getElementById('dailyDiv') as HTMLElement;
    daily.className="btn btn-dark";

    var monthly = document.getElementById('monthlyDiv') as HTMLElement;
    monthly.className="btn btn-dark";

    var annual = document.getElementById('annualDiv') as HTMLElement;
    annual.className="btn btn-dark";
  }

  clickedMonthly() {
    var monthly = document.getElementById('monthlyDiv') as HTMLElement;
    monthly.className="btn btn-danger";
    monthly.click();

    var daily = document.getElementById('dailyDiv') as HTMLElement;
    daily.className="btn btn-dark";

    var weekly = document.getElementById('weeklyDiv') as HTMLElement;
    weekly.className="btn btn-dark";

    var annual = document.getElementById('annualDiv') as HTMLElement;
    annual.className="btn btn-dark";
  }

  clickedAnnual() { 
    var annual = document.getElementById('annualDiv') as HTMLElement;
    annual.className="btn btn-danger";
    annual.click();
    
    var monthly = document.getElementById('monthlyDiv') as HTMLElement;
    monthly.className="btn btn-dark";

    var daily = document.getElementById('dailyDiv') as HTMLElement;
    daily.className="btn btn-dark";

    var weekly = document.getElementById('weeklyDiv') as HTMLElement;
    weekly.className="btn btn-dark";
  }

  showDiv = {
    daily : false,
    weekly : false,
    monthly : false,
    annual : false
  }


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;
}