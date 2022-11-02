import { ToastrModule } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodBank } from 'src/app/modules/hospital/model/bloodBank.model';

import { BloodBankService } from '../services/blood-bank.service';
import { EmailService } from '../services/email.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-blood-bank',
  templateUrl: './create-blood-bank.component.html',
  styleUrls: ['./create-blood-bank.component.css']
})
export class CreateBloodBankComponent{

  public bloodBank: BloodBank = new BloodBank();
  public errorMessage: string = '';

  constructor(private bloodBankService: BloodBankService,
              private router: Router,
              private toastr: ToastrService) { }

  public createBloodBank() {

    this.bloodBankService.createBloodBank(this.bloodBank).subscribe((res => {
      this.router.navigate(['/bloodBanks']);
      this.toastr.success('Blood bank "' + this.bloodBank.name + '" is registered', 'Registration success !');
      }),

      (err) => {
        this.errorMessage = err;
        this.toastr.error(err.error, 'Status: ' + + err.status);
      });

  }


}


