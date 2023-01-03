import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ExaminationsServiceService } from './examinationsService/examinations-service.service';

@Component({
  selector: 'app-examinations-graphs',
  templateUrl: './examinations-graphs.component.html',
  styleUrls: ['./examinations-graphs.component.css']
})
export class ExaminationsGraphsComponent implements OnInit {

  monthlyExaminations = false;
  yearlyExaminations = false;
  chart: any = [];
  chartYearly: any = [];
  numb: number[] = [];

  constructor(private examinationsService: ExaminationsServiceService) {
    Chart.register(...registerables);
  }


  ngOnInit(): void {

    for (let i = 1; i <= 12; i++) {
      this.examinationsService.getExaminationsByMonth(i).subscribe(res => {
        this.numb[i] = res.length;
        this.chartYearly = new Chart("yearlyExaminationsId", {
          type: 'bar',
          data: {
            labels: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'],
            datasets: [{
              label: 'Doctor examinations monthly',
              data: [this.numb[i]],
              backgroundColor: [
                '#f44336',
              ],
              borderColor: [
                'rgba(255, 255, 255, 1.0)',
              ],
              borderWidth: 3
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                ticks: { color: 'white' }
              },
              x: {
                ticks: { color: 'white' }
              },
            }
          }
        });

      });
    }

    this.chart = new Chart("monthlyExaminationsId", {
      type: 'bar',
      data: {
        labels: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.', '13.', '14.', '15.', '16.', '17.', '18.', '19.', '20.', '21.', '22.', '23.', '24.', '25.', '26.', '27.', '28.', '29.', '30.', '31.'],
        datasets: [{
          label: 'Doctor examinations monthly',
          data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 12, 19, 3, 5, 2, 3, 12, 19, 3],
          backgroundColor: [
            '#f44336',
          ],
          borderColor: [
            'rgba(255, 255, 255, 1.0)',
          ],
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            ticks: { color: 'white' }
          },
          x: {
            ticks: { color: 'white' }
          },
        }
      }
    });
  }


}

