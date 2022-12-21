import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import MedicalDrugs from 'src/app/model/medicalDrugs';
import Prescription from 'src/app/model/prescription';
import { TreatmentHistoryService } from '../../treatment-history/treatment-history.service';
import { PrescriptionItemComponent } from '../prescription-item/prescription-item.component';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})

export class PrescriptionComponent implements OnInit {
  allMedicalDrugs: MedicalDrugs[] = []
  writtenPrescriptions: Prescription[] = []

  itemForm = this.fb.group({
    medicine: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  });

  prescriptionForm = this.fb.group({
    items: this.fb.array([])
  })

  listForm = this.fb.group({
    prescriptions: this.fb.array([])
  })


  constructor(
    private fb: FormBuilder,
    private treatmentHistoryService: TreatmentHistoryService
  ) { }

  ngOnInit(): void {
    this.treatmentHistoryService.getAllMedicalDrugs().subscribe({
      next: (medicalDrugs) => {
        this.allMedicalDrugs = medicalDrugs;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  get items() {
    return this.prescriptionForm.controls["items"] as FormArray;
  }

  addNewItem() {
    //this.items.push(this.itemForm);
    const item = this.fb.group({
      medicine: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
    });
    this.items.push(item);
  }

  save() {
    console.log(this.prescriptionForm.value)
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
  }




}

// export class PrescriptionComponent implements OnInit {

//   @ViewChild('ChildInsertionPoint', { read: ViewContainerRef })
//   childInsertionPoint!: ViewContainerRef;

//   prescrtiptionForm!: FormGroup;
//   constructor(private fb: FormBuilder) { }

//   ngOnInit(): void {
//     this.prescrtiptionForm = this.fb.group({
//       //prescrtiptionItems: this.fb.array([])
//       chosenMedicalDrug_fc: [], //ovo ne moze da nadje?;  probaj bez array sa jednostavni poljima
//       quantity_fc: []
//     });
//   }

//   // newPrescriptionItem(): FormGroup {
//   //   return this.fb.group({
//   //     chosenMedicalDrug_fc: [], //ovo ne moze da nadje?;  probaj bez array sa jednostavni poljima
//   //     quantity_fc: []
//   //   })
//   // }

//   // addPrescriptionItem() {
//   //   this.prescrtiptionItems.push(this.newPrescriptionItem());
//   // }

//   // get prescrtiptionItems(): FormArray {
//   //   return this.prescrtiptionForm.get("prescrtiptionItems") as FormArray
//   // }

//   addPrescriptionItemComponent(): void {
//     this.childInsertionPoint.createComponent(PrescriptionItemComponent);
//   };

//   onSubmit() {
//     console.log(this.prescrtiptionForm.value);
//   }

// }
