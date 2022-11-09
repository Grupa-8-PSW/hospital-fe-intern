import { Component, OnInit } from '@angular/core';
import Patient from 'src/app/model/patient';
import { PatientService } from '../../hospital/feedback/services/patient.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService) { 
    this.patients = [];
  }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(){
    this.patientService.getAllPatients().subscribe((res: Patient[]) => {
      this.patients = res;
    });
  }

}
