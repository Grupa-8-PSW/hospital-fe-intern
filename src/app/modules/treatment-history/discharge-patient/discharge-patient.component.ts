import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import TreatmentHistory from 'src/app/model/treatmentHistory';
import { parseAndSetTime } from '../../shared/util/util';
import { TreatmentHistoryService } from '../treatment-history.service';

@Component({
  selector: 'app-discharge-patient',
  templateUrl: './discharge-patient.component.html',
  styleUrls: ['./discharge-patient.component.css']
})
export class DischargePatientComponent implements OnInit {
  dischargeForm!: FormGroup;
  //workingDaysFilter = workingDaysFilter;
  id?: string;
  submitted = false;
  submitingError: string | null = null;
  // Mock data
  treatmentHistory?: TreatmentHistory;
 
  constructor(
    private route: ActivatedRoute,
    //private patientService: PatientService,
    private treatmentHistoryService: TreatmentHistoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.dischargeForm = new FormGroup({
      date: new FormControl<moment.Moment | null>(null, [Validators.required]),
      dischargeReason: new FormControl('', [Validators.required])
    });

    this.treatmentHistoryService.getTreatmentHistoryById(Number(this.id)).subscribe({
      next: (treatmentHistory) => {
        this.treatmentHistory = treatmentHistory;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }


  onSubmit(e : Event) {
    this.submitingError = null;
    if (!this.dischargeForm.valid) {
      this.submitingError = "All fields must be valid.";
      return;
    };
    this.submitted = true;
    //console.log(parseAndSetTime(this.date.value, "00:00"));
    //console.log(this.date.value);
      const startTime = parseAndSetTime(this.date.value, "00:00");
      if (!startTime) {
        console.log("Failed to parse date and time");
        this.submitingError = "Failed to parse date and time";
        return;
      }
      const treatmentHistory : TreatmentHistory = {
        id: this.treatmentHistory?.id,
        startDate: this.treatmentHistory?.startDate,
        endDate: this.date.value.format("MM/DD/yyyy"),
        active: this.treatmentHistory?.active,  //ili false?
        dischargeReason: String(this.dischargeReason.value),
        patientId: Number(this.treatmentHistory?.patientId),
        bedId: Number(this.treatmentHistory?.bedId),
        reason: String(this.treatmentHistory?.reason),
        roomId: Number(this.treatmentHistory?.roomId)
        
      };
      this.treatmentHistoryService.finishTreatmentHistory(treatmentHistory).subscribe({
        next: (res) => {
          console.log(res);
        
          this.router.navigate([`/treatmentHistory/view/${treatmentHistory.id}`]); //mozda this.
        },
        error: (err) => {
          console.log(err);
          this.submitingError = "Error rescheduling examination";
          this.submitted = false;
        }
      });
    
  }//

  get date() : FormControl {
    return this.dischargeForm.controls['date'] as FormControl;
  }

  get dischargeReason() : FormControl {
    return this.dischargeForm.controls['dischargeReason'] as FormControl;
  }


}
