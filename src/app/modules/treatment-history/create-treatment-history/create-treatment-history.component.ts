import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Patient from 'src/app/model/patient';
import Room from 'src/app/model/room';
import TreatmentHistory from 'src/app/model/treatmentHistory';
import { PatientService } from '../../hospital/feedback/services/patient.service';
import { TreatmentHistoryService } from '../treatment-history.service';

import { Location } from '@angular/common';
import * as moment from 'moment';


@Component({
  selector: 'app-create-treatment-history',
  templateUrl: './create-treatment-history.component.html',
  styleUrls: ['./create-treatment-history.component.css']
})

export class CreateTreatmentHistoryComponent implements OnInit {
  treatmentHistoryForm!: FormGroup;
  id?: string;
  loading = false;
  submitted = false;
  submitingError: string | null = null;
  fetchingError: string | null = null;
  // Mock data
  treatmentHistory?: TreatmentHistory;
  patients: Patient[] = [];
  rooms: Room[] = [];

  constructor(
    private route: ActivatedRoute,
    private treatmentHistoryService: TreatmentHistoryService,
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.treatmentHistoryForm = new FormGroup({
      patient: new FormControl<string>('default', [this.noOptionSelectedValidator("patient")]),
      room: new FormControl<string>('default', [this.noOptionSelectedValidator("room")]),
    });

    this.loading = true;
    this.patientService.getAllPatients().subscribe({
      next: (patients) => {
        this.patients = patients;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.fetchingError = "Error fetching patients";
        this.loading = false;
      }
    });
    ///isto i za rooms
  }

  onSubmit(e : Event) {
    this.submitingError = null;
    if (!this.treatmentHistoryForm.valid) {
      this.submitingError = "All fields must be valid.";
      return;
    };
    this.submitted = true;

    const treatmentHistory : TreatmentHistory = {
      patientId: Number(this.patient.value),
      reason: ''  //popravi!
    };

    console.log(treatmentHistory);
    this.treatmentHistoryService.createTreatmentHistory(treatmentHistory).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate([`/treatmentHistory/viewAll`]);
      },
      error: (err) => {
        console.log(err);
        this.submitingError = "Error creating examination, calendar full for that time";//?
        this.submitted = false;
      }
    });
  }

  get patient() : FormControl {
    return this.treatmentHistoryForm.controls['patient'] as FormControl;
  }

  noOptionSelectedValidator(name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value.trim() !== "default" ? null : { notSelected: true };
    };
  }

}
