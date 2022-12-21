import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import MedicalDrugs from 'src/app/model/medicalDrugs';
import { TreatmentHistoryService } from '../../treatment-history/treatment-history.service';

@Component({
  selector: 'app-prescription-item',
  templateUrl: './prescription-item.component.html',
  styleUrls: ['./prescription-item.component.css']
})

export class PrescriptionItemComponent implements OnInit {
  allMedicalDrugs: MedicalDrugs[] = []
  chosenMedicalDrug_fc = new FormControl('');
  chosenMedicalDrug?: MedicalDrugs;

  form!: FormGroup;

  constructor(
    private rootFormGroup: FormGroupDirective,
    private treatmentHistoryService: TreatmentHistoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;


    chosenMedicalDrug_fc: [this.chosenMedicalDrug, Validators.required];

    this.treatmentHistoryService.getAllMedicalDrugs().subscribe({
      next: (medicalDrugs) => {
        this.allMedicalDrugs = medicalDrugs;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  save(): void {
    console.log(this.form.value);
  }

}