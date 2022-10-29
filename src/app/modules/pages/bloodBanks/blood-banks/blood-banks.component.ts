import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BloodBank } from 'src/app/modules/hospital/model/bloodBank.model';
import { BloodBankService } from '../services/blood-bank.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-blood-banks',
  templateUrl: './blood-banks.component.html',
  styleUrls: ['./blood-banks.component.css']
})
export class BloodBanksComponent implements OnInit {

  
  public dataSource = new MatTableDataSource<BloodBank>();
  public displayedColumns = ['name', 'email', 'serverAddress'];
  public bloodBanks: BloodBank[] = [];

  constructor(private bloodBankService: BloodBankService, private router: Router) { }

  ngOnInit(): void {
    this.bloodBankService.getBloodBanks().subscribe(res => {
      this.bloodBanks = res;
      this.dataSource.data = this.bloodBanks;
    })
  }

  public addBloodBank() {
    this.router.navigate(['/bloodBanks/add']);
  }

}
