import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BloodConsumptionReport } from 'src/app/model/BloodConsumptionReport';
import { ScheduleReportsService } from '../services/schedule-reports.service';
import { DOCUMENT } from '@angular/common'; 
import {FormBuilder, Validators} from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-schedule-dialog',
  templateUrl: './schedule-dialog.component.html',
  styleUrls: ['./schedule-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ScheduleDialogComponent implements OnInit {

  public bloodConsumptionReport: BloodConsumptionReport = new BloodConsumptionReport();
  public startTime: any;
  public startDate: any = Date.now;
  public frequencyPeriodInHours: any;
  public customFrequencyMonths: any=0;
  public customFrequencyDays: any=0;

  public ConsumptionPeriodHours: any;
  public ConsumptionPeriodDays: any;
  public ConsumptionPeriodMonths:any = 0;

  constructor(
    private router: Router,
    private reportService: ScheduleReportsService,
    private _formBuilder: FormBuilder,
    @Inject(DOCUMENT) document: Document,
    private dateAdapter: DateAdapter<Date>) {
      
      document.getElementById('el');
      this.dateAdapter.setLocale('en-GB');
    }

               
  ngOnInit(): void {
    const date = new Date(); 
    this.startDate = date;
    
  }            
      
  showDiv = {
    daily : false,
    weekly : false,
    monthly : false,
    annual : false
  }

  WeeklyNext() {
    this.calculatePeriod();   
  }

  MonthlyNext() {
    this.calculatePeriod();  
  
  }

  calculatePeriod() {
    var d = 24 * this.ConsumptionPeriodDays;
    this.ConsumptionPeriodHours = this.ConsumptionPeriodHours + d;
  }


  schedule(): void {
      this.bloodConsumptionReport.ConsumptionPeriodHours = this.ConsumptionPeriodHours;
      this.bloodConsumptionReport.frequencyPeriodInHours = this.frequencyPeriodInHours;
      this.bloodConsumptionReport.startDate = this.startDate;
      this.bloodConsumptionReport.startTime = this.startTime;
    
      this.reportService.createReport(this.bloodConsumptionReport).subscribe((res => {
 
    }));

  } 

  clickedDaily() {
    this.frequencyPeriodInHours = 24;
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
    this.frequencyPeriodInHours = 24*7;
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
    this.frequencyPeriodInHours = 217;
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
    
    this.frequencyPeriodInHours = 0;


  }

  nextCustomPeriod() {
    this.frequencyPeriodInHours = this.customFrequencyDays * 24 + this.customFrequencyMonths*31*24;
    
    var m = 24*31* this.ConsumptionPeriodMonths;
    var d = 24 * this.ConsumptionPeriodDays;
    
    this.ConsumptionPeriodHours =  d+m;

  }

  startDateNext() {
    
    this.convertStartDateToString();
    this.convertStartTimeToString();

  }

  convertStartTimeToString() {
    let startTimeString = String(this.startTime);
    var split = startTimeString.split(" ");
    this.startTime = split[4];
  }

  convertStartDateToString() {
    let startDateString = String(this.startDate);

    var split = startDateString.split(" ");

    var month = split[1];
    var day = split[2];
    var year = split[3];
    this.startDate = day+"/"+month+"/"+year;
  }


}


