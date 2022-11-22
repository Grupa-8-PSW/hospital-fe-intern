import { Component, Input, OnInit } from '@angular/core';
import Patient from 'src/app/model/patient';
import PatientAgeStatistic from 'src/app/model/patient-age-statistic.model';
import { PatientService } from '../../hospital/feedback/services/patient.service';

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
