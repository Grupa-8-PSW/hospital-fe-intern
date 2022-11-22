import { Component, OnInit } from '@angular/core';
import PatientAgeStatistic from 'src/app/model/patient-age-statistic.model';
import PatientBloodTypeStatistic from 'src/app/model/patient-blood-type-statistic.model';
import PatientGenderStatistic from 'src/app/model/patient-gender-statistic.model';
import Statistic from 'src/app/model/statistic.model';
import { PatientService } from '../../hospital/feedback/services/patient.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  ageStatistic: PatientAgeStatistic;
  genderStatistic: PatientGenderStatistic;
  bloodTypeStatistic: PatientBloodTypeStatistic;

  constructor(private patientService: PatientService) { 
    this.ageStatistic = {
      zeroToEighteen: 0,
      nineteenToSixtyFour: 0,
      sixtyFivePlus: 0
    };
    this.genderStatistic = {
      male: 0,
      female: 0
    };
    this.bloodTypeStatistic = {
      zeroPositive: 0,
      zeroNegative: 0,
      aPositive: 0,
      aNegative: 0,
      bPositive: 0,
      bNegative: 0,
      abPositive: 0,
      abNegative: 0
    };
  }

  ngOnInit(): void {
    this.getStatistic();
  }

  getStatistic(){
    this.patientService.getStatistic().subscribe((res: Statistic) => {
      this.ageStatistic = res.ageStatistic;
      this.genderStatistic = res.genderStatistic;
      this.bloodTypeStatistic = res.bloodTypeStatistic;
    });
  }

}
