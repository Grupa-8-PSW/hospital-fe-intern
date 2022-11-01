import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BloodBank } from 'src/app/modules/hospital/model/bloodBank.model';
import { BloodBankService } from '../../services/blood-bank.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public errorMessage: string = '';
  bloodTypeForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private DialogRef: MatDialogRef<DialogComponent>,
    private api: BloodBankService, @Inject(MAT_DIALOG_DATA) public data : BloodBank, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.bloodTypeForm = this.formBuilder.group({
      bloodType : ['', Validators.required],
      quantity: ['']
    })
  }
  checkForBlood() {
    console.log(this.data)
    console.log(this.bloodTypeForm.value.bloodType)
    if(this.bloodTypeForm.value.quantity !== ''){
      var type = this.bloodTypeForm.value.bloodType;
      var quant = this.bloodTypeForm.value.quantity;
      var stat = false;
      this.api.checkBlood(this.data, type, quant).subscribe((res => {
        console.log(res);
        stat = res;
        var success = document.getElementById('mess2');
        var fail = document.getElementById('mess1');
        if(stat){
          success?.setAttribute('style', 'color: green; display: block;');
          fail?.setAttribute('style', 'color: red; display: none;');
        } else {
          fail?.setAttribute('style', 'color: red; display: block;');
          success?.setAttribute('style', 'color: green; display: none;');
        }
      }),
      (err) => {
        this.errorMessage = err;
        this.toastr.error(err.error, 'Status: ' + + err.status);
      });
    } else {
      var type = this.bloodTypeForm.value.bloodType;
      this.api.checkBloodAvailabilty(this.data, type).subscribe((res => {
        console.log(res);
        var success = document.getElementById('mess2');
        var fail = document.getElementById('mess1');
        if(res){
          success?.setAttribute('style', 'color: green; display: block;');
          fail?.setAttribute('style', 'color: red; display: none;');
        } else {
          fail?.setAttribute('style', 'color: red; display: block;');
          success?.setAttribute('style', 'color: green; display: none;');
        }
      }),
      (err) => {
        this.errorMessage = err;
        this.toastr.error(err.error, 'Status: ' + + err.status);
      })
    }
    // this.DialogRef.close();
  }
  close() {
    this.DialogRef.close();
  }

}
