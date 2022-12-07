import { Component } from '@angular/core';
import Patient from 'src/app/model/patient';
import { PatientService } from '../../hospital/feedback/services/patient.service';
@Component({
  selector: 'app-blocking-users',
  templateUrl: './blocking-users.component.html',
  styleUrls: ['./blocking-users.component.css']
})
export class BlockingUsersComponent {

  public patients: Patient[] = [];

  constructor(private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe(res => {
      this.patients = res;
    });
  }
  blockAccess(index: number, email: string): void {
    this.patientService.blockAccess(email).subscribe(res=>{
      delete this.patients[index];
    })
  }
}
