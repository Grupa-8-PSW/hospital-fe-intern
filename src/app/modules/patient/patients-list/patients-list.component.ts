import { Component, Input, OnInit } from '@angular/core';
import PatientAgeStatistic from 'src/app/model/patient-age-statistic.model';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  @Input() ageStatistic: PatientAgeStatistic;

  constructor() { 
    this.ageStatistic = {
      zeroToEighteen: 0,
      nineteenToSixtyFour: 0,
      sixtyFivePlus: 0
    };
  }

  ngOnInit(): void {
    
  }

}
