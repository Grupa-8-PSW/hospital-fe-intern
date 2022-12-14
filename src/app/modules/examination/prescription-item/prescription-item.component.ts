import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import MedicalDrugs from 'src/app/model/medicalDrugs';
import { TreatmentHistoryService } from '../../treatment-history/treatment-history.service';

@Component({
  selector: 'app-prescription-item',
  templateUrl: './prescription-item.component.html',
  styleUrls: ['./prescription-item.component.css']
})
export class PrescriptionItemComponent implements OnInit{
  medicalDrugs: MedicalDrugs[] = []

  constructor(
    private treatmentHistoryService: TreatmentHistoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    // this.therapyForm = new FormGroup({
    //   bloodType: new FormControl<String>('default', [this.noOptionSelectedValidatorBlood()]),
    //   medicalDrug: new FormControl<String>('default', [this.noOptionSelectedValidatorMedicalDrug()]),
    //   amount: new FormControl(null, [Validators.required]),
    //   reason: new FormControl('', [Validators.required])
    // });

    this.treatmentHistoryService.getAllMedicalDrugs().subscribe({
      next: (medicalDrugs) => {
        this.medicalDrugs = medicalDrugs;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
