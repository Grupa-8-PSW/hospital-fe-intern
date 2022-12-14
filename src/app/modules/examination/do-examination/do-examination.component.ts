import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ExaminationDone from 'src/app/model/examination-done';
import Symptom from 'src/app/model/symptom';
import { PrescriptionComponent } from '../prescription/prescription.component';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-do-examination',
  templateUrl: './do-examination.component.html',
  styleUrls: ['./do-examination.component.css']
})
export class DoExaminationComponent implements OnInit{
  allSymptoms: Symptom[] = [];
  symptoms = new FormControl('');
  selectedSymptoms: Symptom[] = [];

  firstFormGroup = this._formBuilder.group({
    symptoms: [this.selectedSymptoms, Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    record: ['', Validators.required],
  });
  // thirdFormGroup = this._formBuilder.group({
  //   record2: [this.selectedSymptoms, Validators.required],
  // });
  isLinear = false;

  constructor(
    private route: ActivatedRoute,
    private scheduleService: ScheduleService,
    private router: Router,
    private _formBuilder: FormBuilder
  ) {}
 
  ngOnInit(): void {
    this.scheduleService.getAllSymptoms().subscribe({
      next: (symptoms) => {
        this.allSymptoms = symptoms;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  done(): void{
    //this.selectedSymptoms = this.firstFormGroup.controls.symptoms.value;
    const examinationDone : ExaminationDone = {
      examinationId: 0,//Number(this.patient.value),
      record : String(this.secondFormGroup.controls.record.value),
      symptoms: this.firstFormGroup.controls.symptoms.value
    };

    console.log(examinationDone);
    this.scheduleService.createExaminationDone(examinationDone).subscribe({
      next: (res) => {
        console.log(res);
        //this.router.navigate([`/examination/do`]);
      },
      error: (err) => {
        console.log(err);
       // this.submitingError = "Error creating treatment history";
       // this.submitted = false;

      }
    });
  }

  @ViewChild('ChildInsertionPoint', { read: ViewContainerRef })
  childInsertionPoint!: ViewContainerRef;

  addPrescriptionComponent(): void{
    this.childInsertionPoint.createComponent(PrescriptionComponent);

  };

  /*  
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
    });*/
  
  
  noOptionSelectedValidator(name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value.trim() !== "default" ? null : { notSelected: true };
    };
  }
}
