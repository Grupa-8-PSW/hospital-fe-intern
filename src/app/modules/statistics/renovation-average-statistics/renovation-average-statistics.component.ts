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

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.getSessionAvg().subscribe(res => {
      this.barChartData.datasets[0].data = res;
      this.chart?.update();
    })
    this.sessionService.getSessionSum().subscribe(res => {
      this.pieChartData.datasets[0].data = res;
      this.chart?.update();
    })
  }

  public barChartType: ChartType = 'bar';
  public pieChartType: ChartType = 'pie';

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
  public pieChartData: ChartData<'line', number[], string> = {
    labels: ['Type', 'Room', 'Interval', 'Duration', 'Available', 'Changes', 'Schedule'],
    datasets: [
      {
        label: '# of Views (Total)',
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
      },
    ]
  };
}
