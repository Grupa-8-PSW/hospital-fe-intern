import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartServiceService } from './chart-service.service';
import { interval, firstValueFrom } from 'rxjs';
import { forEach } from 'lodash';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  public chart: any;
  public chartRequest: any;
  public pieChart: any;

  barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];

  startDate: Date = new Date();
  endDate: Date = new Date();
  selInput: String = '';
  generate: Boolean = false;
  bloodTypes = [
    "0-",
    "0+",
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-"
  ];


  constructor(private _service: ChartServiceService) {}

  ngOnInit(): void {
  }

  async ShowTenderCharts(): Promise<void> {
    if(this.selInput === 't'){
      this.generate = true;
      let data = await firstValueFrom(this._service.GetBloodBetweenDatesForTenders(this.startDate, this.endDate));
      const bankNames = this.CreateBankNamesArray(data);
      const values = this.CreateValuesForAllBloodByBanksFromTenders(bankNames, data);
      const bloodTypes = this.CreateBloodTypesArray(data);
      const quantities = this.SumQuantitiesForBloodTypes(bloodTypes, data);
      this.generate = false;
      if(this.chart == undefined && this.pieChart == undefined){
        this.createPieChart(bloodTypes, quantities);
        this.createChart(bankNames, values);
      } else{
        this.chart.data.datasets[0].data = values;
        this.chart.data.labels = bankNames;
        this.chart.update();
      }


    } else {
      this.generate = true;
      let data = await firstValueFrom(this._service.GetBloodBetweenDatesForUrgentRequest(this.startDate, this.endDate));
      const quantities = this.CreateBloodQuanitites(data[0].blood);
      this.generate = false;
      if(this.chart == undefined){
        this.createUrgentRequestChart(quantities);
      } else{
      this.chart.data.datasets[0].data = quantities;
      this.chart.data.labels = this.bloodTypes;
      this.chart.update();
      }

    }
  }

  CreateBloodQuanitites(data: any){
    let quanitities: any[] = [];
    data.forEach((element: { quantity: any; }) => {
        quanitities.push(element.quantity)
      });
    return quanitities;
  }


  CreateBankNamesArray(data: any): any{
    const bankNames: string[] = [];
    data.forEach((element: {}) => {
      let temp = Object.keys(element);
      bankNames.push(temp[temp.length - 1]);
    });
    return bankNames;
  }

  SumQuantitiesForBloodTypes(bloodTypes: any, data: any){
    let sum = 0;
    let sums: string[] = [];
    bloodTypes.forEach((elem: string) => {
      sum = 0;
      data.forEach((element: { [x: string]: number; }) => {
        Object.keys(element).forEach(key => {
          if (key === elem) {
            sum += element[key];
          }
        })
      })
      sums.push(sum.toString());
    })
    return sums;
  }

  CreateBloodTypesArray(data: any): any {
    let bloodTypes: string[] = [];
    data.forEach((element: {}) => {
      let temp = Object.keys(element);
      temp.pop();
      bloodTypes = bloodTypes.concat(temp);
    })
    return bloodTypes.filter((value, index) => bloodTypes.indexOf(value) === index);
  }

  CreateValuesForAllBloodByBanksFromTenders(ks: any, data: any): any{
    const values: any[] = [];
    ks.forEach((elem: string) => {
      data.forEach((element: { [x: string]: { toString: () => any; }; }) => {
        Object.keys(element).forEach(key => {
          if(key === elem){
            values.push(element[key].toString());
          }
        })
      })
    })
    return values;
  }

  createChart(bankNames: any[], values: any[]){

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: bankNames,
	       datasets: [
          {
            label: "Blood quantities",
            data: values,
            backgroundColor: '#9C254D'
          }
        ]
      },
      options: {
        aspectRatio: 2
      }

    });
  }


  createUrgentRequestChart(values: any[]){

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.bloodTypes,
	       datasets: [
          {
            label: "Blood quantities",
            data: values,
            backgroundColor: '#9C254D'
          }
        ]
      },
      options: {
        aspectRatio: 2
      }

    });
  }


  createPieChart(bloodTypes: any[], quantities: any[]){
    this.pieChart = new Chart("MyPieChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: bloodTypes,
	       datasets: [
          {
            label: "Ukupno krvi",
            data: quantities,
            backgroundColor: ['#EF4B4B', '#7ECFC0', '#90A17D', '#F2E3C9', '#EC8F6A']
          }
        ]
      },
      options: {
        aspectRatio: 2
      }

    });
  }

}
