import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-graph-statistics',
  templateUrl: './graph-statistics.component.html',
  styleUrls: ['./graph-statistics.component.css']
})
export class GraphStatisticsComponent implements OnInit {

  public barChartData: ChartData<'bar', number[], string> = {
    labels: [ 'Male', 'Female' ],
    datasets: [
      { 
      data: [ 65, 59 ], 
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
    responsive: false,
    plugins: {
      legend: {
        display: false
      }
    }
  };
  public barChartPlugins = [ DatalabelsPlugin ];

  public pieChartData: ChartData<'pie', number[], string> = {
    labels: [ '0+ ', '0- ', 'A+ ', 'A- ', 'B+ ', 'B- ', 'AB+ ', 'AB- ' ],
    datasets: [
      { 
      data: [ 500, 300, 100, 200, 150, 400, 800, 600 ], 
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
        },
      },
    }
  };
  public pieChartPlugins = [ DatalabelsPlugin ];

  constructor() {
  }

  ngOnInit() {
  }

}
