import { Dialog } from '@angular/cdk/dialog';
import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BloodRequestServiceService } from '../services/blood-request-service.service';

@Component({
  selector: 'app-wrong-request-dialog',
  templateUrl: './wrong-request-dialog.component.html',
  styleUrls: ['./wrong-request-dialog.component.css']
})
export class WrongRequestDialogComponent {
  message: any = '';
  
  constructor( @Inject(DOCUMENT) document: Document,
  private service: BloodRequestServiceService,@Inject(MAT_DIALOG_DATA) public data: {id: any, request: any}, public matDialogRef: MatDialogRef<WrongRequestDialogComponent>) {

  }


  changeStatusOfRequest(myarea: any) {
        this.data.request.status = 3;
        this.data.request.managerComment = myarea;
        this.service.changeRequestStatus( this.data.request).subscribe(res=> {
        
        window.location.reload();
         this.matDialogRef.close();
       });
  }

  close() {
    this.matDialogRef.close();
     
  }
}
