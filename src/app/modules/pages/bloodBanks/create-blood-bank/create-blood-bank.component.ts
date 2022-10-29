import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodBank } from 'src/app/modules/hospital/model/bloodBank.model';

import { BloodBankService } from '../services/blood-bank.service';
import { EmailService } from '../services/email.service';


@Component({
  selector: 'app-create-blood-bank',
  templateUrl: './create-blood-bank.component.html',
  styleUrls: ['./create-blood-bank.component.css']
})
export class CreateBloodBankComponent{

  public bloodBank: BloodBank = new BloodBank();
   
  constructor(private bloodBankService: BloodBankService, private emailService: EmailService ,private router: Router) { }

  public createBloodBank() {
    if (!this.isValidInput())
    {
      window.alert('empty field!');
    }

    this.bloodBankService.createBloodBank(this.bloodBank).subscribe((res => {
      this.router.navigate(['/bloodBanks']);
      }));
  
  }


  private isValidInput(): boolean {
    return this.bloodBank?.email != '' && this.bloodBank?.name != '' && this.bloodBank?.serverAddress != '';
  }
}
