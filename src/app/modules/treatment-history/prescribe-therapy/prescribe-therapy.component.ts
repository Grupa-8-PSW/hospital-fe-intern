import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Form, ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Moment } from 'moment';
import { BloodService } from '../../blood/blood.service';
import { BloodType } from '../../blood/model/BloodType';

@Component({
  selector: 'app-prescribe-therapy',
  templateUrl: './prescribe-therapy.component.html',
  styleUrls: ['./prescribe-therapy.component.css']
})
export class PrescribeTherapyComponent implements OnInit {

  therapyForm!: FormGroup;
  bloodTypes = Object.values(BloodType);
  submittingError: string | null = null;

  constructor(
    private bloodService: BloodService
  ) { }

  ngOnInit(): void {
    this.therapyForm = new FormGroup({
      bloodType: new FormControl<String>('default', [this.noOptionSelectedValidator()]),
      amount: new FormControl(null, [Validators.required]),
      reason: new FormControl('', [Validators.required])
    });
  }

  onSubmit(event: Event): void {
    this.submittingError = null
    if (this.therapyForm.invalid) {
      this.submittingError = 'All fields must be valid.';
      return;
    }
    


   
  }

  get reason() : FormControl {
    return this.therapyForm.controls['reason'] as FormControl;
  }

  get bloodType() : FormControl {
    return this.therapyForm.controls['bloodType'] as FormControl;
  }

  get amount() : FormControl {
    return this.therapyForm.controls['amount'] as FormControl;
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
    this.therapyForm.reset({
      bloodType: 'default',
      amount: null,
      reason: '',
      deliveryDate: null
    });
  }

}
