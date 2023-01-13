import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
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
  public protocol: any;
  constructor(private bloodBankService: BloodBankService, @Inject(MAT_DIALOG_DATA) public data : BloodBank, private toastr: ToastrService){

  }

  public getBloodBanks(){
    this.bloodBankService.getBloodBanks().subscribe(res => {
      this.bloodBanks = res;
    })
  }

  public sendRequest(){
    if(this.protocol === "GRPC"){
    this.bloodBankService.sendRequestGrpc(this.data).subscribe(res => {
    })
  }else this.bloodBankService.sendRequestHttp(this.data).subscribe(res => {
    this.toastr.success('Blood units were replenished !', 'Success !');
  })
  }

  ngOnInit(): void {
    this.bloodBankService.getBloodBanks().subscribe(res => {
      this.bloodBanks = res;
    })

  }
}
