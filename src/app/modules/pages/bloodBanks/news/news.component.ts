import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BloodBankNews } from 'src/app/model/bloodBankNews';
import { BloodBankNewsService } from '../services/blood-bank-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  public bloodBanksNews: BloodBankNews[] = [];
  images = [944, 1011, 984, 34, 21, 105].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private router: Router, private dialog: MatDialog, private bloodBankNewsService: BloodBankNewsService) { }

  ngOnInit(): void {
    this.getAllNews();
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
