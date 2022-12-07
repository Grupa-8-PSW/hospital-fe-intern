import { Component } from '@angular/core';
import Patient from 'src/app/model/patient';
import { PatientService } from '../../hospital/feedback/services/patient.service';

@Component({
  selector: 'app-unblocking-users',
  templateUrl: './unblocking-users.component.html',
  styleUrls: ['./unblocking-users.component.css']
})
export class UnblockingUsersComponent {
  public patients: Patient[] = [];

  constructor(private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe(res => {
      this.patients = res;
    });
  }
  manageAccess(index: number, email: string): void {
    this.patientService.manageAccess(email,'unblock').subscribe(res=>{
      this.patients[index].lastName+='    [[Patient unblocked]]';
    })
  }
}
