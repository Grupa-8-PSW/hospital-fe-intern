import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'lodash';
import { BloodAmount } from 'src/app/model/bloodAmount';
import { BloodType } from 'src/app/model/patient';
import { TenderOffer } from 'src/app/model/tenderOffer';
import { TenderOffersComponent } from '../tender-offers/tender-offers.component';
import { TenderService } from '../tender.service';

@Component({
  selector: 'app-all-tenders',
  templateUrl: './all-tenders.component.html',
  styleUrls: ['./all-tenders.component.css']
})
export class AllTendersComponent {
  public offers: any[] =[];
  //  public offers: any[] = [
  //   {
  //     tenderID : 1,
  //     bloodAmounts : [ 
  //     {
  //       bloodType: 'A+',
  //       bloodAmount: 32,
  //       priceAmount: 0
  //     }]
  //   },
  //   {
  //     tenderID : 2,
  //     bloodAmounts : [ {
  //       bloodType: 'B+',
  //       bloodAmount: 17,
  //       priceAmount: 0
  //    },
  //    {
  //     bloodType: '0+',
  //     bloodAmount: 32,
  //     priceAmount: 0
  //   }]
  //   },
  //   {
  //     tenderID : 2,
  //     bloodAmounts : [ {
  //       bloodType: 'B+',
  //       bloodAmount: 17,
  //       priceAmount: 0
  //    },
  //    {
  //     bloodType: '0+',
  //     bloodAmount: 32,
  //     priceAmount: 0
  //   }]
  //   },
  //   {
  //     tenderID : 2,
  //     bloodAmounts : [ {
  //       bloodType: 'B+',
  //       bloodAmount: 17,
  //       priceAmount: 0
  //    },
  //    {
  //     bloodType: '0+',
  //     bloodAmount: 32,
  //     priceAmount: 0
  //   }]
  //   },
  //   {
  //     tenderID : 2,
  //     bloodAmounts : [ {
  //       bloodType: 'B+',
  //       bloodAmount: 17,
  //       priceAmount: 0
  //    },
  //    {
  //     bloodType: '0+',
  //     bloodAmount: 32,
  //     priceAmount: 0
  //   }]
  //   }
  // ];

  constructor(@Inject(DOCUMENT) document: Document,
              private ts: TenderService, private dialog: MatDialog, private router: Router) {
    
  }


  ngOnInit(): void {
    this.ts.getTenders().subscribe(res => {
      this.offers = res;
    })
  }

  seeOffers(off: any) {
    this.dialog.open(TenderOffersComponent, {
      width: '50%',
      height: '80%',
      data: {
        id: off.tenderID
      } 
    })
  }

  createNewTender() {
    this.router.navigate(['/tenders']);
  }
}
