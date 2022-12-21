import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import ExaminationDone from 'src/app/model/examination-done';
import MedicalDrugs from 'src/app/model/medicalDrugs';
import Prescription from 'src/app/model/prescription';
import Symptom from 'src/app/model/symptom';
import { TreatmentHistoryService } from '../../treatment-history/treatment-history.service';
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
  allMedicalDrugs: MedicalDrugs[] = []
  writtenPrescriptions: Prescription[] = []
  public dataSource = new MatTableDataSource<Prescription>();
  public displayedColumns = ['prescription_number'];

  firstFormGroup = this._formBuilder.group({
    symptoms: [this.selectedSymptoms, Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    record: ['', Validators.required],
  });
   thirdFormGroup = this._formBuilder.group({
  //   record2: [this.selectedSymptoms, Validators.required],
   });
  isLinear = false;


  itemForm = this._formBuilder.group({
    medicine: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  });

  prescriptionForm = this._formBuilder.group({
    items: this._formBuilder.array([])
  })

  listForm = this._formBuilder.group({
    prescriptions: this._formBuilder.array([])
  })



  constructor(
    private route: ActivatedRoute,
    private scheduleService: ScheduleService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private treatmentHistoryService: TreatmentHistoryService
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
    this.treatmentHistoryService.getAllMedicalDrugs().subscribe({
      next: (medicalDrugs) => {
        this.allMedicalDrugs = medicalDrugs;
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.dataSource.data = this.writtenPrescriptions;

  }

  get selSymptoms() { return this.firstFormGroup.controls.symptoms.value; }

  get record() { return this.secondFormGroup.controls.record.value; }

  get items() {
    return this.prescriptionForm.controls["items"] as FormArray;
  }

  addNewItem() {
    //this.items.push(this.itemForm);
    const item = this._formBuilder.group({
      medicine: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
    });
    this.items.push(item);
  }

  save() {
    console.log(this.listForm.value)
    this.writtenPrescriptions.push(this.prescriptions.value[0])
    console.log(this.writtenPrescriptions)
  }


  get prescriptions() {
    return this.listForm.controls["prescriptions"] as FormArray;
  }

  addNewPrescription() {
    //this.items.push(this.itemForm);
    // const item = this.fb.group({
    //   prescription: new FormControl('', Validators.required),
    // });
    this.prescriptions.push(this.items)
   // this.prescriptions.clear()
  }
  saveP() {
    console.log(this.listForm.value)
    this.writtenPrescriptions.push(this.prescriptions.value[0])
    console.log(this.writtenPrescriptions)
    this.dataSource.data = this.writtenPrescriptions;
  }


  done(): void{
    //this.selectedSymptoms = this.firstFormGroup.controls.symptoms.value;

    console.log(this.selectedSymptoms)

    const examinationDone : ExaminationDone = {
      examinationId: 1,//Number(this.patient.value),
      record : String(this.secondFormGroup.controls.record.value),
      symptoms: this.firstFormGroup.controls.symptoms.value,
      prescriptions: null
   //   prescriptions: this.writtenPrescriptions
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
    this.thirdFormGroup.addControl('new', new FormControl('', Validators.required));
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
