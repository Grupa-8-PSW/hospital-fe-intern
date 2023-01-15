import { Component } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import AppointmentStepViewCountStatistic from 'src/app/model/appointment-step-view-count-statistic.model';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { EventStatisticsService } from 'src/app/modules/hospital/feedback/services/event-statistics.service';
import AppointmentEventStatistic from 'src/app/model/appointment-event-statistic.model';
import PatientAgeStatistic from 'src/app/model/patient-age-statistic.model';

@Component({
  selector: 'app-event-statistic',
  templateUrl: './event-statistic.component.html',
  styleUrls: ['./event-statistic.component.css']
})
export class EventStatisticComponent {

  appointmentStatistic: AppointmentStepViewCountStatistic;
  avgSecEachStep: AppointmentStepViewCountStatistic;
  succPercentage: number;
  unSuccPercentage: number;
  numberOfSteps: number;
  durationOfSteps: number;
  graphLoaded: boolean;
  ageStatStep: PatientAgeStatistic;

  constructor(private service: EventStatisticsService){
    this.appointmentStatistic = {
        stepOne: 0,
        stepTwo: 0,
        stepThree: 0,
        stepFour: 0
    }
    this.numberOfSteps = 0
    this.durationOfSteps = 0
    this.graphLoaded = false
    this.succPercentage = 0;
    this.unSuccPercentage = 0;
    this.avgSecEachStep = {
      stepOne: 0,
      stepTwo: 0,
      stepThree: 0,
      stepFour: 0
    }
    this.ageStatStep = {
      zeroToEighteen: 0,
      nineteenToSixtyFour: 0,
      sixtyFivePlus: 0
    }
  }

  ngOnInit() {
    this.getStatistic();
  }

  public barChartData: ChartData<'bar', number[], string> = {
    labels: [ 'Step one', 'Step two', 'Step three', 'Step four'],
    datasets: [
      { 
      data: [], 
      backgroundColor: [
        'rgba(39, 221, 245, 0.5)',
        'rgba(245, 39, 148, 0.5)',
        'rgba(120, 39, 148, 0.5)',
        'rgba(245, 39, 75, 0.5)'
      ],
      borderColor: [
        'rgb(39, 221, 245)',
        'rgb(245, 39, 148)',
        'rgb(120, 39, 148)',
        'rgb(245, 39, 75)'
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
  public Plugins = [ DatalabelsPlugin ];

  public barChartForMinutesData: ChartData<'bar', number[], string> = {
    labels: [ 'Step one', 'Step two', 'Step three', 'Step four'],
    datasets: [
      { 
      data: [], 
      backgroundColor: [
        'rgba(39, 221, 245, 0.5)',
        'rgba(245, 39, 148, 0.5)',
        'rgba(120, 39, 148, 0.5)',
        'rgba(245, 39, 75, 0.5)'
      ],
      borderColor: [
        'rgb(39, 221, 245)',
        'rgb(245, 39, 148)',
        'rgb(120, 39, 148)',
        'rgb(245, 39, 75)'
      ],
      borderWidth: 1
      }
    ]
  };

  public pieChartData: ChartData<'pie', number[], string> = {
    labels: [ 'Successful','Unsuccessful' ],
    datasets: [
      { 
      data: [], 
      backgroundColor: [
        'rgba(39, 221, 245, 0.5)',
        'rgba(245, 39, 148, 0.5)',
      ],
      borderColor: [
        'rgb(39, 221, 245)',
        'rgb(245, 39, 148)',
        'rgb(120, 39, 148)',
        'rgb(245, 39, 75)'
      ],
      borderWidth: 1
      }
    ]
  };
  public pieChartDataForAge: ChartData<'pie', number[], string> = {
    labels: [ 'Zero to eighteen','Nineteen to sixtyfour','Over sixtyfive' ],
    datasets: [
      { 
      data: [], 
      backgroundColor: [
        'rgba(39, 221, 245, 0.5)',
        'rgba(245, 39, 148, 0.5)',
        'rgba(120, 39, 148, 0.5)',
        'rgba(245, 39, 75, 0.5)'
      ],
      borderColor: [
        'rgb(39, 221, 245)',
        'rgb(245, 39, 148)',
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

  getStatistic(){
    this.service.getStatistic().subscribe((res: AppointmentEventStatistic) => {
      this.appointmentStatistic = res.stepViewCountStatistic;
      this.numberOfSteps = res.averageNumberOfStep;
      this.durationOfSteps = res.averageSecondsOfScheduling;
      this.avgSecEachStep = res.durationViewingEachStep;
      this.succPercentage = res.succesfullPercentage;
      this.unSuccPercentage = 100 - res.succesfullPercentage;
      this.ageStatStep = res.ageStatistic
      this.barChartData.datasets[0].data = [
        this.appointmentStatistic.stepOne, 
        this.appointmentStatistic.stepTwo,
        this.appointmentStatistic.stepThree,
        this.appointmentStatistic.stepFour,
      ];
      this.pieChartData.datasets[0].data = [
        this.succPercentage,
        this.unSuccPercentage
      ];
      this.barChartForMinutesData.datasets[0].data = [
        this.avgSecEachStep.stepOne,
        this.avgSecEachStep.stepTwo,
        this.avgSecEachStep.stepThree,
        this.avgSecEachStep.stepFour
      ];
      this.pieChartDataForAge.datasets[0].data = [
        this.ageStatStep.nineteenToSixtyFour,
        this.ageStatStep.zeroToEighteen,
        this.ageStatStep.sixtyFivePlus
      ]
  
      this.graphLoaded = this.stepViewCountGraphLoaded();
    });
  }

  stepViewCountGraphLoaded(): boolean{
    return (
      this.appointmentStatistic.stepOne != 0 || 
      this.appointmentStatistic.stepTwo != 0 || 
      this.appointmentStatistic.stepThree != 0 || 
      this.appointmentStatistic.stepFour != 0 ||
      this.unSuccPercentage != 0 ||
      this.succPercentage != 0 ||
      this.avgSecEachStep.stepOne != 0 ||
      this.avgSecEachStep.stepTwo != 0 ||
      this.avgSecEachStep.stepThree != 0 ||
      this.avgSecEachStep.stepFour != 0
    );
  }
}
