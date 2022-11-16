import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BloodBankService } from '../services/blood-bank.service';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BloodBank } from 'src/app/model/bloodBank.model';
<<<<<<< HEAD
import { ScheduleDialogComponent } from '../schedule-dialog/schedule-dialog.component';
import { BloodBankNews } from 'src/app/model/bloodBankNews';
import { BloodBankNewsService } from '../services/blood-bank-news.service';
=======
import { BloodBankNewsService } from '../services/blood-bank-news.service';
import { BloodBankNews } from 'src/app/model/bloodBankNews';
import { FlexLayoutModule } from '@angular/flex-layout';
>>>>>>> de3f615fef8b5c515a9994f0a6db0bd7fd0cefdd

@Component({
  selector: 'app-blood-banks',
  templateUrl: './blood-banks.component.html',
  styleUrls: ['./blood-banks.component.css']
})
export class BloodBanksComponent implements OnInit {


  public dataSource = new MatTableDataSource<BloodBank>();
  public displayedColumns = ['name', 'email', 'serverAddress', 'action'];
  public bloodBanks: BloodBank[] = [];
  public bloodBanksNews: BloodBankNews[] = [];

  constructor(private bloodBankService: BloodBankService,
    private router: Router, private dialog: MatDialog, private bloodBankNewsService: BloodBankNewsService) { }

  ngOnInit(): void {
    this.bloodBankService.getBloodBanks().subscribe(res => {
      this.bloodBanks = res;
      this.dataSource.data = this.bloodBanks;
    })
    this.getAllNews();
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

  getAllNews() {
    this.bloodBankNewsService.getAll().subscribe(res => {
      this.bloodBanksNews = res;
    })
  }

  publishNews(news: BloodBankNews) {
    this.bloodBankNewsService.publishNews(news).subscribe(res=> {
      this.getAllNews();
    });
  }

  archiveNews(news: BloodBankNews) {
    this.bloodBankNewsService.archiveNews(news).subscribe(res=> {
      this.getAllNews();
    });
  }

}
