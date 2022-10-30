import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BloodBank } from 'src/app/modules/hospital/model/bloodBank.model';
import { BloodBankService } from '../../services/blood-bank.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  bloodTypeForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private DialogRef: MatDialogRef<DialogComponent>,
    private api: BloodBankService, @Inject(MAT_DIALOG_DATA) public data : BloodBank) { }

  ngOnInit(): void {
    this.bloodTypeForm = this.formBuilder.group({
      bloodType : ['', Validators.required],
    })
  }
  checkForBlood() {
    console.log(this.data)
    console.log(this.bloodTypeForm.value.bloodType)
    var type = this.bloodTypeForm.value.bloodType;
    this.api.checkBloodAvailabilty(this.data, type);
    this.DialogRef.close();
  }

}
