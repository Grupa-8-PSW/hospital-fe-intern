import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodBank } from '../model/bloodBank.model';
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
      return;
    }
    window.alert(this.bloodBank.email)
    this.bloodBankService.createBloodBank(this.bloodBank).subscribe();
    this.emailService.sendEmail(this.bloodBank.email).subscribe();
  }


  private isValidInput(): boolean {
    return this.bloodBank?.email != '' && this.bloodBank?.name != '' && this.bloodBank?.serverAddress != '';
  }
}
