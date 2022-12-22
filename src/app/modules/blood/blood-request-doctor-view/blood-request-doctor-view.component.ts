import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BloodService } from '../blood.service';
import { BloodType } from '../model/BloodType';
import BloodOrder from 'src/app/model/bloodOrder';
import { BloodUnitRequestStatus } from '../model/BloodUnitRequestStatus';
import { SubscriptionStatus } from 'src/app/model/subscriptionStatus';

@Component({
  selector: 'app-blood-request-doctor-view',
  templateUrl: './blood-request-doctor-view.component.html',
  styleUrls: ['./blood-request-doctor-view.component.css']
})
export class BloodRequestDoctorViewComponent {

  bloodTypes = Object.values(BloodType);
  bloodOrderList = new MatTableDataSource<BloodOrder>();
  BloodUnitRequestStatus: any;
  bloodType: any;

  constructor(
    private bloodService: BloodService,
    ) { }
    
    ngOnInit(): void {
    }

    getBlodTypeName(bt: string): string {
      switch(bt) {
        case "0+": return "ZERO_POSITIVE"
        case "0-": return "ZERO_NEGATIVE"
        case "A+": return "A_POSITIVE"
        case "A-": return "A_NEGATIVE"
        case "B+": return "B_POSITIVE"
        case "B-": return "B_NEGATIVE"
        case "AB+": return "AB_POSITIVE"
        case "AB-": return "AB_NEGATIVE"
        default: return ""
      }
    }

    getBloodOrderByType() {
      this.bloodService.getBloodOrderByType(this.getBlodTypeName(this.bloodType)).subscribe((data) => {
        this.bloodOrderList.data = data;
      });
    }
    
    getStatusByValue(value: number) {
      return SubscriptionStatus[value];
    }
    
    getTypeByValue(bt: number) {
      return (this.bloodTypes as any)[bt];
    }

  /*checkIfUnclear(bloodRequest: BloodOrder): boolean {
    return bloodRequest.orderStatus;
  }*/

}
