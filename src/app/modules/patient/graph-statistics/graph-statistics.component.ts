import { Component, Input, OnChanges } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import PatientBloodTypeStatistic from 'src/app/model/patient-blood-type-statistic.model';
import PatientGenderStatistic from 'src/app/model/patient-gender-statistic.model';

@Component({
  selector: 'app-graph-statistics',
  templateUrl: './graph-statistics.component.html',
  styleUrls: ['./graph-statistics.component.css']
})
export class GraphStatisticsComponent implements OnChanges {

  @Input() genderStatistic: PatientGenderStatistic;
  @Input() bloodTypeStatistic: PatientBloodTypeStatistic;
  graphsLoaded: boolean;

  constructor() {
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

  ngOnChanges() {
    this.barChartData.datasets[0].data = [
      this.genderStatistic.male, 
      this.genderStatistic.female
    ];

    this.pieChartData.datasets[0].data = [
      this.bloodTypeStatistic.zeroPositive, 
      this.bloodTypeStatistic.zeroNegative, 
      this.bloodTypeStatistic.aPositive, 
      this.bloodTypeStatistic.aNegative, 
      this.bloodTypeStatistic.bPositive, 
      this.bloodTypeStatistic.bNegative, 
      this.bloodTypeStatistic.abPositive, 
      this.bloodTypeStatistic.abNegative
    ];

    this.graphsLoaded = this.genderGraphLoaded() && this.bloodTypeGraphLoaded();
  }

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
