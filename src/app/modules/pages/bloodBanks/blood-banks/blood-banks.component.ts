import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BloodBankService } from '../services/blood-bank.service';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BloodBank } from 'src/app/model/bloodBank.model';
import { ScheduleDialogComponent } from '../schedule-dialog/schedule-dialog.component';

@Component({
  selector: 'app-blood-banks',
  templateUrl: './blood-banks.component.html',
  styleUrls: ['./blood-banks.component.css']
})
export class BloodBanksComponent implements OnInit {

  
  public dataSource = new MatTableDataSource<BloodBank>();
  public displayedColumns = ['name', 'email', 'serverAddress', 'action'];
  public bloodBanks: BloodBank[] = [];

  constructor(private bloodBankService: BloodBankService, 
    private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.bloodBankService.getBloodBanks().subscribe(res => {
      this.bloodBanks = res;
      this.dataSource.data = this.bloodBanks;
    })
  }

  public schedule() {
    this.dialog.open(ScheduleDialogComponent, {
      width: '50%',
      height: '80%'
    })
  }

  public addBloodBank() {
    this.router.navigate(['/bloodBanks/add']);
  }

  checkBloodAvailability(bank: BloodBank) {
    this.dialog.open(DialogComponent, {
      width: '20%',
      data: bank
    })
  }

}
