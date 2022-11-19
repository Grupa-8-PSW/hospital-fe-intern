import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Form, ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Moment } from 'moment';
import { BloodService } from '../blood.service';
import { BloodType } from '../model/BloodType';

@Component({
  selector: 'app-blood-request',
  templateUrl: './blood-request.component.html',
  styleUrls: ['./blood-request.component.css']
})
export class BloodRequestComponent implements OnInit {
  bloodRequestForm!: FormGroup;
  bloodTypes = Object.values(BloodType);
  submittingError: string | null = null;

  constructor(
    private bloodService: BloodService
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
    console.log(bloodRequest);

    this.resetForm();
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
