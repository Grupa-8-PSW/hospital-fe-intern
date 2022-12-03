import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BloodService } from '../blood.service';
import { BloodType } from '../model/BloodType';
import BloodUnitRequest from '../model/BloodUnitRequest';
import { BloodUnitRequestStatus } from '../model/BloodUnitRequestStatus';
import * as moment from 'moment';
import { Moment } from 'moment';
import { format } from 'date-fns';
@Component({
  selector: 'app-blood-request-edit-dialog',
  templateUrl: './blood-request-edit-dialog.component.html',
  styleUrls: ['./blood-request-edit-dialog.component.css']
})
export class BloodRequestEditDialogComponent {

  public errorMessage: string = '';
  bloodRequestEditForm!: FormGroup
  bloodTypes = Object.values(BloodType);
  submittingError: string | null = null;
  dateChangedFlag: boolean = false;
  constructor(private formBuilder: FormBuilder, private DialogRef: MatDialogRef<BloodRequestEditDialogComponent>,
    private api: BloodService, @Inject(MAT_DIALOG_DATA) public data : BloodUnitRequest) { }

  ngOnInit(): void {
    this.bloodRequestEditForm = this.formBuilder.group({
      bloodType: new FormControl<String>((this.bloodTypes as any)[this.data.type], [this.noOptionSelectedValidator()]),
      amount: new FormControl(this.data.amountL, [Validators.required]),
      reason: new FormControl(this.data.reason, [Validators.required]),
      deliveryDate: new FormControl<moment.Moment | null>(this.data.creationDate, [Validators.required])
    })
    this.bloodRequestEditForm.controls['deliveryDate'].setValue(this.data.creationDate.format('DD/MM/YYYY'))
  }
  noOptionSelectedValidator(): import("@angular/forms").ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value.trim() !== "default" ? null : { notSelected: true };
    };
  }
  
  close() {
    this.DialogRef.close();
  }

  get reason() : FormControl {
    return this.bloodRequestEditForm.controls['reason'] as FormControl;
  }

  get bloodType() : FormControl {
    return this.bloodRequestEditForm.controls['bloodType'] as FormControl;
  }

  get amount() : FormControl {
    return this.bloodRequestEditForm.controls['amount'] as FormControl;
  }

  get deliveryDate() : FormControl {
    return this.bloodRequestEditForm.controls['deliveryDate'] as FormControl;
  }

  editBloodRequest() {
    this.submittingError = null
    if (this.bloodRequestEditForm.invalid) {
      this.submittingError = 'All fields must be valid.';
      return;
    }
    
    const bloodUnitRequest : BloodUnitRequest = {
      id: this.data.id,
      type: this.getBloodTypeName(this.bloodType.value).toString(),
      amountL: this.amount.value,
      reason: this.reason.value,
      creationDate: this.dateChangedFlag?  this.deliveryDate.value.format('DD/MM/YYYY') : moment(this.data.creationDate).format('DD/MM/YYYY'),
      status: BloodUnitRequestStatus.WAITING,
      managerComment: '',
      doctorId: this.data.doctorId,
    };

    this.api.updateBloodRequest(bloodUnitRequest).subscribe({
      next: (res) => {
        console.log(res);
        },
      error: (err) => {
        console.log(err)
       }
      });
    this.DialogRef.close();
  }
  getBloodTypeName(bt: String): String {
    switch(bt) {
      case "0 +": return "ZERO_POSITIVE"
      case "0 -": return "ZERO_NEGATIVE"
      case "A +": return "A_POSITIVE"
      case "A -": return "A_NEGATIVE"
      case "B +": return "B_POSITIVE"
      case "B -": return "B_NEGATIVE"
      case "AB +": return "AB_POSITIVE"
      case "AB -": return "AB_NEGATIVE"
      default: return ""
    }
  }

  dateChanged() {
    this.dateChangedFlag = true;
  }
}

@Component({
  selector: 'dialog-component',
  template: `<h2>Manager Comment</h2>
      <p>{{data}}</p>
      <button class="btn btn-primary" (click)="dialog.close()">OK</button>`
})
export class ManagerCommentDialogComponent {

  public title!: string;
  public message!: string;

  constructor( public dialog: MatDialogRef<ManagerCommentDialogComponent>, @Inject(MAT_DIALOG_DATA) public data : BloodUnitRequest) { }
}