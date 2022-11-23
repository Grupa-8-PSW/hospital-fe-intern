import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Form, ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Moment } from 'moment';
import { ToastrService } from 'ngx-toastr';
import { BloodService } from '../blood.service';
import { BloodType } from '../model/BloodType';
import BloodUnitRequest from '../model/BloodUnitRequest';

@Component({
  selector: 'app-blood-request',
  templateUrl: './blood-request.component.html',
  styleUrls: ['./blood-request.component.css']
})
export class BloodRequestComponent implements OnInit {
  bloodRequestForm!: FormGroup;
  bloodTypes = Object.values(BloodType);
  submittingError: string | null = null;
  pending = false;

  constructor(
    private bloodService: BloodService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.bloodRequestForm = new FormGroup({
      bloodType: new FormControl<String>('default', [this.noOptionSelectedValidator()]),
      amount: new FormControl(null, [Validators.required]),
      reason: new FormControl('', [Validators.required]),
      deliveryDate: new FormControl<moment.Moment | null>(null, [Validators.required])
    });
  }

  onSubmit(event: Event): void {
    this.submittingError = null
    if (this.bloodRequestForm.invalid) {
      this.submittingError = 'All fields must be valid.';
      return;
    }
    const bloodRequest = {
      type: this.getBlodTypeName(this.bloodType.value),
      amount: this.amount.value,
      reason: this.reason.value,
      when: this.deliveryDate.value.format('DD/MM/YYYY')
    };
    const bloodUnitRequest : BloodUnitRequest = {
      id: 0,
      type: this.getBlodTypeName(this.bloodType.value).toString(),
      amount: this.amount.value,
      reason: this.reason.value,
      creationDate: this.deliveryDate.value.format('DD/MM/YYYY')
    };

    this.pending = true;
    this.submittingError = null;
    this.bloodService.createBloodRequest(bloodUnitRequest).subscribe({
      next: (res) => {
        console.log(res);
        this.pending = false;
        this.toastr.success('Blood requeste created successfully', '');
        },
      error: (err) => {
        console.log(err);
        this.submittingError = 'Error creating blood request.';
        this.pending = false;
       }
      });
  }

  get reason() : FormControl {
    return this.bloodRequestForm.controls['reason'] as FormControl;
  }

  get bloodType() : FormControl {
    return this.bloodRequestForm.controls['bloodType'] as FormControl;
  }

  get amount() : FormControl {
    return this.bloodRequestForm.controls['amount'] as FormControl;
  }

  get deliveryDate() : FormControl {
    return this.bloodRequestForm.controls['deliveryDate'] as FormControl;
  }

  noOptionSelectedValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value.trim() !== "default" ? null : { notSelected: true };
    };
  }

  getBlodTypeName(bt: String): String {
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

  resetForm(): void {
    this.bloodRequestForm.reset({
      bloodType: 'default',
      amount: null,
      reason: '',
      deliveryDate: null
    });
  }
}
