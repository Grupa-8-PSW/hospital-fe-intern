import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Blood from 'src/app/model/blood';
import { BloodBank } from 'src/app/model/bloodBank.model';
import { BloodType } from 'src/app/model/bloodType';
import MonthlySubscription from 'src/app/model/monthlySubscription';
import { SubscriptionStatus } from 'src/app/model/subscriptionStatus';
import { BloodBankService } from '../services/blood-bank.service';
import { MonthlySubscriptionService } from './monthly-subscription.service';

@Component({
  selector: 'app-monthly-subscription',
  templateUrl: './monthly-subscription.component.html',
  styleUrls: ['./monthly-subscription.component.css']
})
export class MonthlySubscriptionComponent {

  bloodBanks: BloodBank[] = [];
  date: Date = new Date();
  quantity = 0;
  type = '';
  blood: Blood[] = [];
  selectedBank = 0;

  constructor(private bankService: BloodBankService, private service: MonthlySubscriptionService, private toastr: ToastrService) {}

  ngOnInit(): void{
    this.bankService.getBloodBanks().subscribe(response => {
      this.bloodBanks = response;
      this.selectedBank = this.bloodBanks.length;
      console.log(this.bloodBanks);
    })
  }

  addBlood(): void {
    this.blood.push(new Blood(BloodType[this.type as keyof typeof BloodType], this.quantity));
    this.toastr.show("Added " + this.quantity + "l of " + this.type);
  }

  createSubscription(): void{
    let subscription = new MonthlySubscription(this.blood, this.date, this.bloodBanks[this.selectedBank], this.bloodBanks[this.selectedBank].id, SubscriptionStatus["WAITING"]);
    this.service.postSubscription(subscription);
  }
}
