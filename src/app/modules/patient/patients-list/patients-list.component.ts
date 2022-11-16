import { Component, OnInit } from '@angular/core';
import Patient from 'src/app/model/patient';
import PatientAgeStatistic from 'src/app/model/patient-age-statistic.model';
import { PatientService } from '../../hospital/feedback/services/patient.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  ageStatistic: PatientAgeStatistic;

  constructor(private patientService: PatientService) { 
    this.ageStatistic = {
      zeroToEighteen: 0,
      nineteenToSixtyFour: 0,
      sixtyFivePlus: 0
    };
  }

  ngOnInit(): void {
    this.getPatientAgeStatistic();
  }

  getPatientAgeStatistic(){
    this.patientService.getPatientAgeStatistic().subscribe((res: PatientAgeStatistic) => {
      this.ageStatistic = res;
    });
  }

}
