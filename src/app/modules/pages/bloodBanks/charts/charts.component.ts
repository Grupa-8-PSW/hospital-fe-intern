import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartServiceService } from './chart-service.service';
import { interval, firstValueFrom } from 'rxjs';
import { forEach } from 'lodash';
import { UrgentRequestBloodBankStatistic } from 'src/app/model/urgentRequestBloodBankStatistic';
import { BloodBankService } from '../services/blood-bank.service';
import { BloodBank } from 'src/app/model/bloodBank.model';
import { relativeTimeThreshold } from 'moment';

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
    "#1e7145",
    "#89e133",
    "#ff0000",
    "#246711",
  ];

  startDate: Date = new Date();
  endDate: Date = new Date();
  selInput: String = '';
  generate: Boolean = false;
  bloodBanks!: BloodBank[]
  selectedBank: any = '';
  showPieChart: Boolean = true;
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


  constructor(private _service: ChartServiceService, private bloodBankService : BloodBankService) {}

  ngOnInit(): void {
    this.bloodBankService.getBloodBanks().subscribe(res=>{
      this.bloodBanks = res;
    })
  }

  async ShowTenderCharts(): Promise<void> {
    if(this.selInput === 't' && this.selectedBank === ''){
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
        this.showPieChart = true;
        this.chart.data.datasets[0].data = values;
        this.chart.data.labels = bankNames;
        this.chart.update();
        this.pieChart.data.datasets[0].data = quantities;
        this.pieChart.data.labels = bloodTypes;
        this.pieChart.update();
      }

    } else if(this.selInput === 'ur' && this.selectedBank === '') {
      this.GenerateAllUrgentRequestBarChart();
      this.GenerateAllUrgentRequestsPieChart();

    } else if(this.selInput === 'ur' && this.selectedBank !== '') {
      this.GenerateUrgentRequestBarChartForBank(this.selectedBank.id);
      this.showPieChart = false;
    }
  }

  async GenerateUrgentRequestBarChartForBank(id: any) : Promise<void> {
    this.generate = true;
      let data =  await firstValueFrom(this._service.GetQuantitiesPerBloodTypeStatisticForBank(id, this.startDate, this.endDate))
      console.log(data)
      this.generate = false;
      if(this.chart == undefined){
        this.createUrgentRequestChart(data.quantities, this.bloodTypes);
      } else{
      this.chart.data.datasets[0].data = data.quantities;
      this.chart.data.labels = this.bloodTypes;
      this.chart.update();
      }
  }

  async GenerateAllUrgentRequestBarChart() : Promise<void> {
    this.generate = true;
      let data =  await firstValueFrom(this._service.GetBloodBetweenDatesForUrgentRequest(this.startDate, this.endDate))
      this.generate = false;
      if(this.chart == undefined){
        this.createUrgentRequestChart(data.quantities, data.bloodBanks);
      } else{
      this.chart.data.datasets[0].data = data.quantities;
      this.chart.data.labels = data.bloodBanks;
      this.chart.update();
      }
  }

  async GenerateAllUrgentRequestsPieChart() : Promise<void> {
    this.showPieChart = true;
    this.generate = true;
      let data =  await firstValueFrom(this._service.GetQuantitiesPerBloodTypeStatistic(this.startDate, this.endDate))
      this.generate = false;
      if(this.pieChart == undefined){
        this.createPieChart(this.bloodTypes, data.quantities);
      } else{
      this.pieChart.data.datasets[0].data = data.quantities;
      this.pieChart.data.labels = this.bloodTypes;
      this.pieChart.update();
      }
      console.log(this.showPieChart)
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
            backgroundColor: this.barColors
          }
        ]
      },
      options: {
        aspectRatio: 2
      }
    });
  }


  createUrgentRequestChart(values: any[], labels: any[]){

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: labels,
	       datasets: [
          {
            label: "Blood quantities",
            data: values,
            backgroundColor: this.barColors
          }
        ]
      },
      options: {
        aspectRatio: 2,
        
      }

    });
  }


  createPieChart(bloodTypes: any[], quantities: any[]){
    this.showPieChart = true;
    this.pieChart = new Chart("MyPieChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: bloodTypes,
	       datasets: [
          {
            label: "Ukupno krvi",
            data: quantities,
            backgroundColor: this.barColors
          }
        ]
      },
      options: {
        aspectRatio: 2,
      }

    });
  }

}
