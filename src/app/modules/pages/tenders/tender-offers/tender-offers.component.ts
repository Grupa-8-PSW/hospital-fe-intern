import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { TenderService } from '../tender.service';

@Component({
  selector: 'app-tender-offers',
  templateUrl: './tender-offers.component.html',
  styleUrls: ['./tender-offers.component.css']
})
export class TenderOffersComponent {

  public offersForTender: any[] | undefined;


  constructor( @Inject(MAT_DIALOG_DATA) public data: {id: any},  private toastr: ToastrService,  private ts: TenderService, private authService: AuthService, public matDialogRef: MatDialogRef<TenderOffersComponent>) {
    
  }


  ngOnInit(): void {
    this.ts.getOffersForTender(this.data.id).subscribe(res => {
      this.offersForTender = res;
    })
  
  }

/*  public createBloodBank() {

    this.bloodBankService.createBloodBank(this.bloodBank).subscribe((res => {
      this.router.navigate(['/bloodBanks']);
      this.toastr.success('Blood bank "' + this.bloodBank.name + '" is registered', 'Registration success !');
      }),

      (err) => {
        this.errorMessage = err;
        this.toastr.error(err.error, 'Status: ' + + err.status);
      });

  } */

  acceptOffer(off: any): void {
    
    off.tenderOfferStatus = 1;
    this.ts.acceptOfferForTender(off).subscribe(res => {
      
      this.toastr.success('Tender offer accepted! Waitin for blood bank to confirm!');
    })


    this.matDialogRef.close();
    
  }
}
