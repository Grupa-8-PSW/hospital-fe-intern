import { Component } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import AppointmentStepViewCountStatistic from 'src/app/model/appointment-step-view-count-statistic.model';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { EventStatisticsService } from 'src/app/modules/hospital/feedback/services/event-statistics.service';
import AppointmentEventStatistic from 'src/app/model/appointment-event-statistic.model';

@Component({
  selector: 'app-event-statistic',
  templateUrl: './event-statistic.component.html',
  styleUrls: ['./event-statistic.component.css']
})
export class EventStatisticComponent {

  appointmentStatistic: AppointmentStepViewCountStatistic;
  numberOfSteps: number;
  durationOfSteps: number;
  graphLoaded: boolean;

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
  public barChartPlugins = [ DatalabelsPlugin ];

  getStatistic(){
    this.service.getStatistic().subscribe((res: AppointmentEventStatistic) => {
      this.appointmentStatistic = res.stepViewCountStatistic;
      this.numberOfSteps = res.averageNumberOfStep;
      this.durationOfSteps = res.averageSecondsOfScheduling;
      console.log(res.stepViewCountStatistic)
      this.barChartData.datasets[0].data = [
        this.appointmentStatistic.stepOne, 
        this.appointmentStatistic.stepTwo,
        this.appointmentStatistic.stepThree,
        this.appointmentStatistic.stepFour,
      ];
  
      this.graphLoaded = this.stepViewCountGraphLoaded();
    });
  }

  stepViewCountGraphLoaded(): boolean{
    return (
      this.appointmentStatistic.stepOne != 0 || 
      this.appointmentStatistic.stepTwo != 0 || 
      this.appointmentStatistic.stepThree != 0 || 
      this.appointmentStatistic.stepFour != 0
    );
  }
}
