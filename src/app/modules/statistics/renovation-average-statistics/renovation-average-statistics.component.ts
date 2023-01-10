import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-renovation-average-statistics',
  templateUrl: './renovation-average-statistics.component.html',
  styleUrls: ['./renovation-average-statistics.component.css']
})
export class RenovationAverageStatisticsComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  data: number[] = [];

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.getSessionAvg().subscribe(res => {
      this.barChartData.datasets[0].data = res;
      this.chart?.update();
    })
  }

  public barChartType: ChartType = 'bar';
  public lineChartType: ChartType = 'line';

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
  public barChartData: ChartData<'bar', number[], string> = {
    labels: ['Type', 'Room', 'Interval', 'Duration', 'Available', 'Changes', 'Schedule'],
    datasets: [
      {
        label: '# of Views (Avg.)',
        data: [] = this.data,
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
