import { Component } from '@angular/core';
import { BloodService } from '../blood.service';
import { BloodType } from '../model/BloodType';
import BloodUnitRequest from '../model/BloodUnitRequest';
import { BloodUnitRequestStatus } from '../model/BloodUnitRequestStatus';

@Component({
  selector: 'app-blood-request-list',
  templateUrl: './blood-request-list.component.html',
  styleUrls: ['./blood-request-list.component.css']
})
export class BloodRequestListComponent {

  bloodRequestList: BloodUnitRequest[] = [];

  constructor(
    private bloodService: BloodService
  ) { }

  ngOnInit(): void {
    this.bloodService.getAllBloodRequests().subscribe({
      next: (data) => {
        this.bloodRequestList = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getStatusByValue(value: number) {
     return BloodUnitRequestStatus[value];
    }

  getTypeByValue(bt: number) {
    switch(bt) {
      case 0: return "ZERO_POSITIVE"
      case 1: return "ZERO_NEGATIVE"
      case 2: return "A_POSITIVE"
      case 3: return "A_NEGATIVE"
      case 4: return "B_POSITIVE"
      case 5: return "B_NEGATIVE"
      case 6: return "AB_POSITIVE"
      case 7: return "AB_NEGATIVE"
      default: return ""
    }
  }

}
