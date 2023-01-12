import { Component, OnInit } from '@angular/core';
import { Chart, ChartData,registerables } from 'chart.js';
import { Router } from '@angular/router';
import { TenderGraphsService } from './tender-graphsService/tender-graphs.service';

@Component({
  selector: 'app-tender-graphs',
  templateUrl: './tender-graphs.component.html',
  styleUrls: ['./tender-graphs.component.css']
})
export class TenderGraphsComponent {

  moneyGraph: any;
  bloodGraph: any;
  bloodPerMonth: any = [];
  moneyPerMonth: any = [];
  year: number;
  bloodType: string;
  constructor(private router:Router, private service: TenderGraphsService) {
    Chart.register(...registerables)
  }

  ngOnInit(): void {

    //const data = [{aPositive: 100, aNegative: 50, bPositive: 50, bNegative: 50, abPositive: 50, abNegative: 50, zeroPositive: 50, zeroNegative: 50},
                  //{aPositive: 100, aNegative: 50, bPositive: 50, bNegative: 50, abPositive: 50, abNegative: 50, zeroPositive: 50, zeroNegative: 50}];

  }
  
  getGraph(year: any, bloodType: string ){

    this.service.GetBloodGraph(year,bloodType).subscribe(res=>{
      this.bloodPerMonth = res
      console.log(this.bloodPerMonth)
      
      if(this.bloodGraph){
        this.bloodGraph.clear();
        this.bloodGraph.destroy();
      }
      this.bloodGraph = new Chart('blood',{
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: this.bloodType,
            data: this.bloodPerMonth, //[12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          }]  
        },
    
      })
      console.log(this.bloodGraph)
    })
  }

  getGraph1(year: any){

    this.service.GetBloodGraph1(year).subscribe(res=>{
      this.moneyPerMonth = res
      console.log(this.moneyPerMonth)
      
      if(this.moneyGraph){
        this.moneyGraph.clear();
        this.moneyGraph.destroy();
      }
  this.moneyGraph = new Chart('money',{
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Money Spent',
        data: this.moneyPerMonth ,
        borderWidth: 1
      }]
    },

  })
})
}
}
