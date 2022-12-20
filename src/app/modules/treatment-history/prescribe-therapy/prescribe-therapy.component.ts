import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Form, ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Moment } from 'moment';
import MedicalDrugs from 'src/app/model/medicalDrugs';
import Therapy from 'src/app/model/therapy';
import { BloodService } from '../../blood/blood.service';
import { BloodType } from '../../blood/model/BloodType';
import { TreatmentHistoryService } from '../treatment-history.service';


@Component({
  selector: 'app-prescribe-therapy',
  templateUrl: './prescribe-therapy.component.html',
  styleUrls: ['./prescribe-therapy.component.css']
})
export class PrescribeTherapyComponent implements OnInit {

  therapyForm!: FormGroup;
  therapyTypeMode: string = 'BLOOD_THERAPY';
  bloodTypes = Object.values(BloodType);
  submittingError: string | null = null;
  therapyId?: number;
  medicalDrugs: MedicalDrugs[] = []

  constructor(
    private treatmentHistoryService: TreatmentHistoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.therapyId = this.route.snapshot.params['id'];
    this.therapyForm = new FormGroup({
      bloodType: new FormControl<String>('default', [this.noOptionSelectedValidatorBlood()]),
      medicalDrug: new FormControl<String>('default', [this.noOptionSelectedValidatorMedicalDrug()]),
      amount: new FormControl(null, [Validators.required]),
      reason: new FormControl('', [Validators.required])
    });

    this.treatmentHistoryService.getAllMedicalDrugs().subscribe({
      next: (medicalDrugs) => {
        this.medicalDrugs = medicalDrugs;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  onSubmit(event: Event): void {
    this.submittingError = null
    if (this.therapyForm.invalid) {
      this.submittingError = 'All fields must be valid.';
      return;
    }
    var therapySubjectVar = '';
    if(this.therapyTypeMode == "BLOOD_THERAPY"){
      therapySubjectVar = this.getBlodTypeName(this.bloodType.value).toString();
    }else{
      therapySubjectVar = this.medicalDrug.value;
    }
    const therapy : Therapy = {
      id: 0,
      amount: this.amount.value,
      reason: this.reason.value,
      therapySubject: therapySubjectVar,
      therapyType: this.therapyTypeMode,
      doctorId: 1,
      treatmentHistoryId: this.therapyId!
    };

    console.log(therapy);
    this.treatmentHistoryService.createTherapy(therapy).subscribe({
      next: (res) => {
        console.log(res);
        },
      error: (err) => {
       }
      });

   
  }

  get reason() : FormControl {
    return this.therapyForm.controls['reason'] as FormControl;
  }

  get bloodType() : FormControl {
    return this.therapyForm.controls['bloodType'] as FormControl;
  }

  get medicalDrug() : FormControl {
    return this.therapyForm.controls['medicalDrug'] as FormControl;
  }

  get amount() : FormControl {
    return this.therapyForm.controls['amount'] as FormControl;
  }

  noOptionSelectedValidatorBlood(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(this.therapyTypeMode == "BLOOD_THERAPY"){
        return control.value.trim() !== "default" ? null : { notSelected: true };
      }
      return null;
    };
  }

  noOptionSelectedValidatorMedicalDrug(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(this.therapyTypeMode == "MEDICAL_DRUG_THERAPY"){
        return control.value.trim() !== "default" ? null : { notSelected: true };
      }
      return null;
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
      medicalDrug: 'default',
      amount: null,
      reason: '',
      deliveryDate: null
    });
  }
  therapyTypeChanged(e: any ){
    this.resetForm();
  }

}
