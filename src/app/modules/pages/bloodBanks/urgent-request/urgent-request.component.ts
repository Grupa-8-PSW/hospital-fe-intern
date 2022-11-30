import { Component, OnInit } from '@angular/core';
import { BloodBank } from 'src/app/model/bloodBank.model';
import Blood from 'src/app/modules/blood/model/Blood';
import { BloodBankService } from '../services/blood-bank.service';

@Component({
  selector: 'app-urgent-request',
  templateUrl: './urgent-request.component.html',
  styleUrls: ['./urgent-request.component.css']
})
export class UrgentRequestComponent implements OnInit{

  public bloodBanks: BloodBank[] = [];
  public selectedBloodBank!: BloodBank;
  constructor(private bloodBankService: BloodBankService){

  }

  public getBloodBanks(){
    this.bloodBankService.getBloodBanks().subscribe(res => {
      this.bloodBanks = res;
    })
  }

  public sendRequest(){
    this.bloodBankService.sendRequest(this.selectedBloodBank).subscribe(res => {

    })
  }

  ngOnInit(): void {
    this.bloodBankService.getBloodBanks().subscribe(res => {
      this.bloodBanks = res;
    })

  }
}
