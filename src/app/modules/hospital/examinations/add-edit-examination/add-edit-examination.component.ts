import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import Doctor from '../../model/doctor';
import Patient from '../../model/patient';
import { workingDaysFilter } from '../../../shared/util/util';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-edit-examination',
  templateUrl: './add-edit-examination.component.html',
  styleUrls: ['./add-edit-examination.component.css']
})
export class AddEditExaminationComponent implements OnInit {
  examinationForm!: FormGroup;
  workingDaysFilter = workingDaysFilter;
  // Mock data change when login/register is implemented

  doctor: Doctor = {
    id: 1,
    workTimeStart: '09:00',
    workTimeEnd: '17:00',
    officeId: 1,
    firstName: 'Pera',
    lastName: 'Peric'
  };

  patients: Patient[] = [
    {
      id: 1,
      firstName: 'Pacijent1',
      lastName: 'Pacijentovic'
    },
    {
      id: 2,
      firstName: 'Pacijent2',
      lastName: 'Pacijentovic'
    }
  ]


  constructor(
    private location : Location
  ) { }

  ngOnInit() {
    this.examinationForm = new FormGroup({
      patient: new FormControl('default', [this.patientSelectedValidator]),
      date: new FormControl(null, [Validators.required]),
      startTime: new FormControl(null, [Validators.required]),
      endTime: new FormControl(null, [Validators.required])
    });
  }

  onSubmit(e : Event) {
    // if (this.patient.value === "default") {
    //   return;
    // }
    // const newExamination = {
    //   id: 10,
    //   doctorId: 1,
    //   patientId: 1
    // };
    console.log(this.examinationForm);
    console.log(e);
  }

  // Getters

  get patient() : FormControl {
    return this.examinationForm.controls['patient'] as FormControl;
  }

  get date() : FormControl {
    return this.examinationForm.controls['date'] as FormControl;
  }

  get startTime() : FormControl {
    return this.examinationForm.controls['startTime'] as FormControl;
  }

  get endTime() : FormControl {
    return this.examinationForm.controls['endTime'] as FormControl;
  }

  patientSelectedValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value.trim() !== "default" ? null : { notSelected: true };
  }

  resetForm() {
    this.examinationForm.controls['patient'].setValue('default');
    this.examinationForm.controls['date'].setValue(null);
    this.examinationForm.controls['startTime'].setValue(null);
    this.examinationForm.controls['endTime'].setValue(null);
  }

  goBack() {
    this.location.back();
  }
}
