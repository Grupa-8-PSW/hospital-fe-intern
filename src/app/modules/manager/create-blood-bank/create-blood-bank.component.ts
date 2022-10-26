import { Component, OnInit } from '@angular/core';
import { BloodBank } from '../model/bloodBank.model';
import { BloodBankService } from '../services/blood-bank.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-blood-bank',
  templateUrl: './create-blood-bank.component.html',
  styleUrls: ['./create-blood-bank.component.css']
})
export class CreateBloodBankComponent{

  public bloodBank: BloodBank = new BloodBank();

  constructor(private bloodBankService: BloodBankService, private router: Router) { }

  public createBloodBank() {
    if (!this.isValidInput())
    {
      return;
    } 
    this.bloodBankService.createBloodBank(this.bloodBank).subscribe();
    
  }

  private isValidInput(): boolean {
    return this.bloodBank?.email != '' && this.bloodBank?.name != '' && this.bloodBank?.serverAddress != '';
  }
}
