import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BloodConsumptionReport } from 'src/app/model/BloodConsumptionReport';
import { ScheduleReportsService } from '../services/schedule-reports.service';
import { DOCUMENT } from '@angular/common'; 
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-schedule-dialog',
  templateUrl: './schedule-dialog.component.html',
  styleUrls: ['./schedule-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ScheduleDialogComponent implements OnInit {

  public bloodConsumptionReport: BloodConsumptionReport = new BloodConsumptionReport();
  public startTime: any;
  public startDate: any;
  public periodInHours: any;
  public months: any = 0;
  public days: any;
  public startPeriodConsumption: any;

  constructor(
              private router: Router,
              private reportService: ScheduleReportsService,
              private _formBuilder: FormBuilder,
              @Inject(DOCUMENT) document: Document) {
                document.getElementById('el');
               }

  ngOnInit(): void {
  }

  daily(): void {
    window.alert(this.startTime);
  }

  schedule(): void {
      this.reportService.createReport(this.bloodConsumptionReport).subscribe((res => {
 
    }));

  } 

  clickedDaily() {
    this.periodInHours = 12;
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
    this.periodInHours = 84;
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
    this.periodInHours = 217;
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


  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  // isEditable = false;

}


