import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-renovation-type-statistics',
  templateUrl: './renovation-type-statistics.component.html',
  styleUrls: ['./renovation-type-statistics.component.css']
})
export class RenovationTypeStatisticsComponent {

  public barChartType: ChartType = 'bar';
  public lineChartType: ChartType = 'line';
  public radarChartType: ChartType = 'radar';

  public chartPlugins = [ DatalabelsPlugin ];
  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true
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
  public radarChartData: ChartData<'bar', number[], string> = {
    labels: ['One', 'Too', 'Tre', 'For', 'Fiv', 'Six', 'Sev'],
    datasets: [
      {
        label: '# of Views Separation',
        data: [12, 19, 3, 5, 2, 3, 1],
        backgroundColor: [
          'rgba(39, 221, 245, 0.5)'
        ],
        borderColor: [
          'rgb(39, 221, 245)'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views Merger',
        data: [20, 13, 4, 6, 5, 4, 2],
        backgroundColor: [
          'rgba(245, 39, 148, 0.5)'
        ],
        borderColor: [
          'rgb(245, 39, 148)'
        ],
        borderWidth: 1
      }
    ]
  };
  public barChartData: ChartData<'bar', number[], string> = {
    labels: ['One', 'Too', 'Tre', 'For', 'Fiv', 'Six', 'Sev'],
    datasets: [
      {
        label: '# of Views Separation',
        data: [12, 19, 3, 5, 2, 3, 1],
        backgroundColor: [
          'rgba(39, 221, 245, 0.5)'
        ],
        borderColor: [
          'rgb(39, 221, 245)'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views Merger',
        data: [20, 13, 4, 6, 5, 4, 2],
        backgroundColor: [
          'rgba(245, 39, 148, 0.5)'
        ],
        borderColor: [
          'rgb(245, 39, 148)'
        ],
        borderWidth: 1
      }
    ]
  };
  public lineChartData: ChartData<'line', number[], string> = {
    labels: ['One', 'Too', 'Tre', 'For', 'Fiv', 'Six', 'Sev'],
    datasets: [
      {
        label: '# of Views Separation',
        data: [12, 19, 3, 5, 2, 3, 1],
        backgroundColor: [
          'rgba(39, 221, 245, 0.5)'
        ],
        borderColor: [
          'rgb(39, 221, 245)'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views Merger',
        data: [20, 13, 4, 6, 5, 4, 2],
        backgroundColor: [
          'rgba(245, 39, 148, 0.5)'
        ],
        borderColor: [
          'rgb(245, 39, 148)'
        ],
        borderWidth: 1
      }
    ]
  };
}
