import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Patient from 'src/app/model/patient';
import Room from 'src/app/model/room';
import TreatmentHistory from 'src/app/model/treatmentHistory';
import { PatientService } from '../../hospital/feedback/services/patient.service';
import { TreatmentHistoryService } from '../treatment-history.service';


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

  async ngOnInit(){
    this.treatmentHistoryForm = new FormGroup({
      patient: new FormControl<string>('default', [this.noOptionSelectedValidator("patient")]),
      room: new FormControl<string>('default', [this.noOptionSelectedValidator("room")]),
      reason: new FormControl('', [Validators.required])
    });

    this.loading = true;

      //this.patientService.getAllPatients().subscribe({
        this.treatmentHistoryService.getPatientsWithoutActiveTreatment().subscribe({
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

      this.treatmentHistoryService.getFreeRooms().subscribe({
        next: (rooms) => {
          this.rooms = rooms;
          this.loading = false;
        },
        error: (err) => {
          console.log(err);
          this.fetchingError = "Error fetching rooms";
          this.loading = false;
        }
      });
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
      reason : String(this.reason.value),
      roomId: Number(this.room.value)
    };

    //const roomId : number = this.room.value

    console.log(treatmentHistory);
    this.treatmentHistoryService.createTreatmentHistory(treatmentHistory).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate([`/treatmentHistory/viewAll`]);
      },
      error: (err) => {
        console.log(err);
        this.submitingError = "Error creating treatment history";
        this.submitted = false;
        this.router.navigate([`/treatmentHistory/viewAll`]);

      }
    });
  }

  get patient() : FormControl {
    return this.treatmentHistoryForm.controls['patient'] as FormControl;
  }

  get room() : FormControl {
    return this.treatmentHistoryForm.controls['room'] as FormControl;
  }

  get reason() : FormControl {
    return this.treatmentHistoryForm.controls['reason'] as FormControl;
  }

  noOptionSelectedValidator(name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value.trim() !== "default" ? null : { notSelected: true };
    };
  }

}
