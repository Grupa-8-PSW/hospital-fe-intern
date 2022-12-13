import { Component } from '@angular/core';
import Patient from 'src/app/model/patient';
import { PatientService } from '../../hospital/feedback/services/patient.service';
@Component({
  selector: 'app-blocking-users',
  templateUrl: './blocking-users.component.html',
  styleUrls: ['./blocking-users.component.css']
})
export class BlockingUsersComponent {

  public blockedPatients: Patient[] = [];
  public unblockedPatients: Patient[] = [];
  constructor(private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.patientService.getMalicious('blocked').subscribe(res => {
      this.blockedPatients = res;
    });
    this.patientService.getMalicious('unblocked').subscribe(res => {
      this.unblockedPatients = res;
    });
  }
  manageAccess(index: number, email: string,type : string): void {
    this.patientService.manageAccess(email,type).subscribe(res=>{
      if(type=='block')this.unblockedPatients[index].lastName+='    [[Patient blocked]]';
      if(type=='unblock')this.blockedPatients[index].lastName+='    [[Patient unblocked]]';
    })
    window.location.reload();
  }

}
