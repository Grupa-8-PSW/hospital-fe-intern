import { Component, DoCheck, OnInit } from '@angular/core';
import Doctor from 'src/app/model/doctor';
import PatientAgeStatistic from 'src/app/model/patient-age-statistic.model';
import PatientBloodTypeStatistic from 'src/app/model/patient-blood-type-statistic.model';
import PatientGenderStatistic from 'src/app/model/patient-gender-statistic.model';
import Statistic from 'src/app/model/statistic.model';
import { DoctorService } from '../../doctor/services/doctor.service';
import { PatientService } from '../../hospital/feedback/services/patient.service';
import { ChartConfiguration, ChartData } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-patients-of-doctor-statistics',
  templateUrl: './patients-of-doctor-statistics.component.html',
  styleUrls: ['./patients-of-doctor-statistics.component.css']
})
export class PatientsOfDoctorStatisticsComponent implements OnInit, DoCheck {
  
  doctors: Doctor[];
  selectedDoctor: number;
  ageStatistic: PatientAgeStatistic;
  genderStatistic: PatientGenderStatistic;
  bloodTypeStatistic: PatientBloodTypeStatistic;
  graphsLoaded: boolean;

  constructor(private doctorService: DoctorService, private patientService: PatientService) { 
    this.doctors = [];
    this.selectedDoctor = 0;
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
    this.graphsLoaded = false;
  }
  ngOnInit(): void {
    this.getDoctors();
  }

  ngDoCheck(): void {
    
  }

  public doughnutChartData: ChartData<'doughnut', number[], string> = {
    labels: [ '0-18 ', '19-64', '65+ ' ],
    datasets: [
      { 
      data: [], 
      backgroundColor: [
        'rgba(39, 221, 245, 0.5)',
        'rgba(245, 39, 148, 0.5)',
        'rgba(245, 39, 39, 0.5)'
      ],
      borderColor: [
        'rgb(39, 221, 245)',
        'rgb(245, 39, 148)',
        'rgb(245, 39, 39)'
      ],
      borderWidth: 1
      }
    ]
  };
  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            if(ctx.chart.data.datasets[0].data[ctx.dataIndex] == 0) return '';
            else return ctx.chart.data.labels[ctx.dataIndex];
          } 
          else return '';
        },
      },
    }
  };
  public doughnutChartPlugins = [ DatalabelsPlugin ];

  public barChartData: ChartData<'bar', number[], string> = {
    labels: [ 'Male', 'Female' ],
    datasets: [
      { 
      data: [], 
      backgroundColor: [
        'rgba(39, 221, 245, 0.5)',
        'rgba(245, 39, 148, 0.5)'
      ],
      borderColor: [
        'rgb(39, 221, 245)',
        'rgb(245, 39, 148)'
      ],
      borderWidth: 1
      }
    ]
  };
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            if(ctx.chart.data.datasets[0].data[ctx.dataIndex] == 0) return '';
            else return ctx.chart.data.datasets[0].data[ctx.dataIndex];
          }
          else return '';
        },
      },
    }
  };
  public barChartPlugins = [ DatalabelsPlugin ];

  public pieChartData: ChartData<'pie', number[], string> = {
    labels: [ '0+ ', '0- ', 'A+ ', 'A- ', 'B+ ', 'B- ', 'AB+ ', 'AB- ' ],
    datasets: [
      { 
      data: [], 
      backgroundColor: [
        'rgba(39, 221, 245, 0.5)',
        'rgba(245, 39, 148, 0.5)',
        'rgba(245, 39, 39, 0.5)',
        'rgba(245, 178, 39, 0.5)',
        'rgba(200, 245, 39, 0.5)',
        'rgba(88, 245, 39, 0.5)',
        'rgba(39, 46, 245, 0.5)',
        'rgba(117, 10, 204, 0.5)'
      ],
      borderColor: [
        'rgb(39, 221, 245)',
        'rgb(245, 39, 148)',
        'rgb(245, 39, 39)',
        'rgb(245, 178, 39)',
        'rgb(200, 245, 39)',
        'rgb(88, 245, 39)',
        'rgb(39, 46, 245)',
        'rgb(117, 10, 204)'
      ],
      borderWidth: 1
      }
    ]
  };
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            if(ctx.chart.data.datasets[0].data[ctx.dataIndex] == 0) return '';
            else return ctx.chart.data.labels[ctx.dataIndex];
          } 
          else return '';
        },
      },
    }
  };
  public pieChartPlugins = [ DatalabelsPlugin ];

  getDoctors() {
    this.doctorService.getDoctors().subscribe((res: Doctor[]) => {
      this.doctors = res;
    });
  }

  displayStatisticForSelectedDoctor() {
    this.graphsLoaded = false;

    this.patientService.getPatientStatisticForSelectedDoctor(this.selectedDoctor).subscribe((res: Statistic) => {
      this.ageStatistic = res.ageStatistic;
      this.genderStatistic = res.genderStatistic;
      this.bloodTypeStatistic = res.bloodTypeStatistic;

      this.doughnutChartData.datasets[0].data = [
        res.ageStatistic.zeroToEighteen,
        res.ageStatistic.nineteenToSixtyFour,
        res.ageStatistic.sixtyFivePlus
      ];

      this.barChartData.datasets[0].data = [
        res.genderStatistic.male, 
        res.genderStatistic.female
      ];
  
      this.pieChartData.datasets[0].data = [
        res.bloodTypeStatistic.zeroPositive, 
        res.bloodTypeStatistic.zeroNegative, 
        res.bloodTypeStatistic.aPositive, 
        res.bloodTypeStatistic.aNegative, 
        res.bloodTypeStatistic.bPositive, 
        res.bloodTypeStatistic.bNegative, 
        res.bloodTypeStatistic.abPositive, 
        res.bloodTypeStatistic.abNegative
      ];

      this.graphsLoaded = this.genderGraphLoaded() && this.bloodTypeGraphLoaded() && this.ageGraphLoaded();
    });
  }

  ageGraphLoaded(): boolean{
    return (
      this.ageStatistic.zeroToEighteen != 0 ||
      this.ageStatistic.nineteenToSixtyFour != 0 ||
      this.ageStatistic.sixtyFivePlus != 0
    );
  }

  genderGraphLoaded(): boolean{
    return (
      this.genderStatistic.male != 0 || 
      this.genderStatistic.female != 0
    );
  }
  
  bloodTypeGraphLoaded(): boolean{
    return(
      this.bloodTypeStatistic.zeroPositive != 0 ||
      this.bloodTypeStatistic.zeroNegative != 0 ||
      this.bloodTypeStatistic.aPositive != 0 ||
      this.bloodTypeStatistic.aNegative != 0 ||
      this.bloodTypeStatistic.bPositive != 0 ||
      this.bloodTypeStatistic.bNegative != 0 ||
      this.bloodTypeStatistic.abPositive != 0 ||
      this.bloodTypeStatistic.abNegative != 0
    );
  }

}
