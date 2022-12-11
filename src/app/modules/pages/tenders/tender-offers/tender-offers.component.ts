import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { TenderService } from '../tender.service';

@Component({
  selector: 'app-tender-offers',
  templateUrl: './tender-offers.component.html',
  styleUrls: ['./tender-offers.component.css']
})
export class TenderOffersComponent {

  public offersForTender: any[] | undefined;
  public offers: any[] = [
    {
      tenderID : 1,
      bloodAmounts : [ 
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

  constructor( @Inject(MAT_DIALOG_DATA) public data: {id: any},  private ts: TenderService, private authService: AuthService) {
    
  }


  ngOnInit(): void {
    window.alert(this.data.id)
    this.ts.getOffersForTender(this.data.id).subscribe(res => {
      this.offersForTender = res;
    })
  
  }

}
