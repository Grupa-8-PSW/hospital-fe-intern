import { Component, OnInit } from '@angular/core';
import { Chart,ChartData,registerables } from 'chart.js';

@Component({
  selector: 'app-tender-charts',
  templateUrl: './tender-charts.component.html',
  styleUrls: ['./tender-charts.component.css']
})
export class TenderChartsComponent implements OnInit {

  moneyGraph: any = [];
  bloodGraph: any = [];
  constructor() {
    Chart.register(...registerables)
   }

  ngOnInit(): void {
    this.moneyGraph = new Chart('money',{
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Spent Money',
          data: [12, 19, 3, 5, 2, 3, 30, 23, 57, 100, 200, 14],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })

    const data = [{x: 'January', aPositive: 100, aNegative: 50, bPositive: 50, bNegative: 50, abPositive: 50, abNegative: 50, zeroPositive: 50, zeroNegative: 50},
                  {x: 'February', aPositive: 100, aNegative: 50, bPositive: 50, bNegative: 50, abPositive: 50, abNegative: 50, zeroPositive: 50, zeroNegative: 50}];
    this.moneyGraph = new Chart('blood',{
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'A+',
          data: data, //[12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          parsing:{
            xAxiskey:'x',
            yAxiskey:'aPositive'
          }
        },{
          label: 'A+',
          data: data, //[12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          parsing:{
            yAxiskey:'aNegative'
          }
        },{
          label: 'B+',
          data: data, //[12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          parsing:{
            yAxiskey:'bPositive'
          }
        },{
          label: 'B-',
          data: data, //[12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          parsing:{
            yAxiskey:'bNegative'
          }
        },{
          label: 'AB+',
          data: data, //[12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          parsing:{
            yAxiskey:'abPositive'
          }
        },{
          label: 'AB-',
          data: data, //[12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          parsing:{
            yAxiskey:'abNegative'
          }
        },{
          label: '0+',
          data: data, //[12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          parsing:{
            yAxiskey:'zeroPositive'
          }
        },{
          label: '0-',
          data: data, //[12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          parsing:{
            yAxiskey:'zeroNegative'
          }
        }]  
      },
 
    })

    /*const dat = [{x: 'Jan', net: 100, cogs: 50, gm: 50}, {x: 'Feb', net: 120, cogs: 55, gm: 75}];
    this.moneyGraph = new Chart('test',{
      type: 'bar',
      data: {
        labels: ['January', 'February'],
        datasets: [{
          label: 'Net sales',
          data: data,
          parsing: {
            yAxisKey: 'net'
          }
        }, {
          label: 'Cost of goods sold',
          data: data,
          parsing: {
            yAxisKey: 'cogs'
          }
        }, {
          label: 'Gross margin',
          data: data,
          parsing: {
            yAxisKey: 'gm'
          }
        }]
      },
    })*/
    
    
  }

}
