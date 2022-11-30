import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { map } from 'lodash';
import { BloodAmount } from 'src/app/model/bloodAmount';
import { BloodType } from 'src/app/model/patient';
import { TenderOffer } from 'src/app/model/tenderOffer';
import { TenderService } from './tender.service';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css']
})



export class TendersComponent implements OnInit {

  
  public offers: any[] = [
    {
      tenderID : 1,
      bloodAmounts : [ {
         bloodType: 'A-',
         bloodAmount: 12,
         priceAmount: 0
      },
      {
        bloodType: 'A+',
        bloodAmount: 32,
        priceAmount: 0
      }]
    },
    {
      tenderID : 2,
      bloodAmounts : [ {
        bloodType: 'B+',
        bloodAmount: 17,
        priceAmount: 0
     },
     {
      bloodType: '0+',
      bloodAmount: 32,
      priceAmount: 0
    }]
    }
  ];

  constructor(@Inject(DOCUMENT) document: Document,
              private ts: TenderService) {
    
  }


  ngOnInit(): void {
  }

  makeOffer(off: any) {
    this.ts.createOffer(off).subscribe((res => {
      }));
  }

}
