import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators, ValidatorFn } from '@angular/forms';
import Patient from '../../../model/patient';
import {parseAndSetTime, workingDaysFilter } from '../../shared/util/util';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import Examination from '../../../model/examination';
import { ScheduleService } from '../schedule.service';
import { PatientService } from '../../hospital/feedback/services/patient.service';
import * as moment from 'moment';

@Component({
  selector: 'app-create-edit-examination',
  templateUrl: './create-edit-examination.component.html',
  styleUrls: ['./create-edit-examination.component.css']
})
export class CreateEditExaminationComponent implements OnInit {
  examinationForm!: FormGroup;
  workingDaysFilter = workingDaysFilter;
  id?: string;
  isAddMode: boolean = true;
  loading = false;
  submitted = false;
  submitingError: string | null = null;
  fetchingError: string | null = null;
  // Mock data
  examination?: Examination;
  patients: Patient[] = [];
  pathDate?: string;
  pathMonth?: string;
  pathYear?: string;


  constructor(
    private location : Location,
    private route: ActivatedRoute,
    private scheduleService: ScheduleService,
    private patientService: PatientService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.examinationForm = new FormGroup({
      patient: new FormControl<string>('default', [this.noOptionSelectedValidator("patient")]),
      date: new FormControl<moment.Moment | null>(null, [Validators.required]),
      startTime: new FormControl(null, [Validators.required]),
      duration: new FormControl('default', [this.noOptionSelectedValidator("duration")])
    });
    if (this.isAddMode) {
      this.pathDate = this.route.snapshot.params['date'];
      this.pathMonth = this.route.snapshot.params['month'];
      this.pathYear = this.route.snapshot.params['year'];
      if (!this.pathDate || !this.pathMonth || !this.pathYear) {
        // Privremeno na brzinu
        console.log('err');
        return;
      }
      this.examinationForm.get('date')?.disable();
      this.examinationForm.patchValue({
        patient: 'default',
        date: moment(`${this.pathYear}-${this.pathMonth}-${this.pathDate}`),
        startTime: null,
        duration: 'default'
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
    } else {
      this.loading = true;
      this.scheduleService.getExaminationById(Number(this.id)).subscribe({
        next: (examination) => {
          this.examination = examination;
          this.patientService.getPatientById(Number(this.examination.patientId)).subscribe({
            next: (patient) => {
              this.patients.push(patient);
              this.examinationForm.patchValue({
                patient: this.examination?.patientId.toString(),
                date: this.examination?.startTime,
                startTime: this.examination?.startTime.format("HH:mm"),
                duration: this.examination?.duration.toString()
              });
              this.examinationForm.get('patient')?.disable();
              this.loading = false;
            },
            error: (err) => {
              console.log(err);
              this.fetchingError = "Error fetching patient";
              this.loading = false;
            }
          })
        },
        error: (err) => {
          console.log(err);
          this.fetchingError = "Error fetching examination";
          this.loading = false;
        }
      });

    }
  }

  onSubmit(e : Event) {
    this.submitingError = null;
    if (!this.examinationForm.valid) {
      this.submitingError = "All fields must be valid.";
      return;
    };
    this.submitted = true;
    console.log(parseAndSetTime(this.date.value, this.startTime.value));
    console.log(this.date.value);
    if (this.isAddMode) {
      const examination : Examination = {
        doctorId: 1,
        patientId: Number(this.patient.value),
        startTime: this.date.value.format("DD/MM/yyyy HH:mm"),
        duration: Number(this.duration.value)
      };
      console.log(examination);
      this.scheduleService.createExamination(examination).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate([`/examinations/${this.pathDate}/${this.pathMonth}/${this.pathYear}`]);
        },
        error: (err) => {
          console.log(err);
          this.submitingError = "Error creating examination, calendar full for that time";
          this.submitted = false;
        }
      });
    } else {
      const startTime = parseAndSetTime(this.date.value, this.startTime.value);
      if (!startTime) {
        console.log("Failed to parse date and time");
        this.submitingError = "Failed to parse date and time";
        return;
      }
      const examination : Examination = {
        id: this.examination?.id,
        doctorId: this.examination?.doctorId!,
        patientId: Number(this.patient.value),
        startTime: this.date.value.format("DD/MM/yyyy HH:mm"),
        duration: Number(this.duration.value)
      };
      this.scheduleService.rescheduleExamination(examination).subscribe({
        next: (res) => {
          console.log(res);
          const timeMoment = moment(examination.startTime, 'DD/MM/YYYY HH:mm');
          // const date = timeMoment.date();
          // const month = timeMoment.month();
          // const year = timeMoment.month();
          // const str = date + '/' + month + '/' + year;
          this.router.navigate([`/examinations/${timeMoment.format("DD/MM/YYYY")}`]);
        },
        error: (err) => {
          console.log(err);
          this.submitingError = "Error rescheduling examination";
          this.submitted = false;
        }
      });
    }
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

  get duration() : FormControl {
    return this.examinationForm.controls['duration'] as FormControl;
  }

  noOptionSelectedValidator(name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value.trim() !== "default" ? null : { notSelected: true };
    };
  }

  resetForm() {
    this.examinationForm.controls['patient'].setValue('default');
    this.examinationForm.controls['date'].setValue(null);
    this.examinationForm.controls['startTime'].setValue(null);
    this.examinationForm.controls['duration'].setValue('default');
  }

  goBack() {
    this.location.back();
  }

  getDurationTimeStamps(): number[] {
    let timeStamps = [];
    for (let i = 15; i <= 120; i += 15) {
      timeStamps.push(i);
    }
    return timeStamps;
  }

}
