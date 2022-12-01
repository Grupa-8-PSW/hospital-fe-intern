import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BloodRequestEditDialogComponent, ManagerCommentDialogComponent } from '../blood-request-edit-dialog/blood-request-edit-dialog.component';
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
  
  bloodTypes = Object.values(BloodType);
  bloodRequestList = new MatTableDataSource<BloodUnitRequest>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  BloodUnitRequestStatus: any;
  constructor(
    private bloodService: BloodService,
    private dialog: MatDialog
    ) { }
    
    ngOnInit(): void {
      this.getAllBloodRequests();
    }
    
    getAllBloodRequests() {
      this.bloodService.getAllBloodRequests().subscribe((data) => {
        this.bloodRequestList.data = data;
        this.bloodRequestList.paginator = this.paginator;
      });
    }
    
    getStatusByValue(value: number) {
      return BloodUnitRequestStatus[value];
    }
    
    getTypeByValue(bt: number) {
      return (this.bloodTypes as any)[bt];
    }

  editBloodRequest(request: BloodUnitRequest) {
    this.dialog.open(BloodRequestEditDialogComponent, {
      width: '20%',
      data: request
    }).afterClosed().subscribe(res => {
      this.getAllBloodRequests();
    })
  }
  checkIfUnclear(bloodRequest: BloodUnitRequest): boolean {
    return bloodRequest.status != BloodUnitRequestStatus.REVIEWAGAIN;
  }

  viewManagerComment(bloodRequest: BloodUnitRequest) {
    this.dialog.open(ManagerCommentDialogComponent, {
      width: '40%',
      data: bloodRequest.managerComment,
    })
  }

  checkIfEditable(bloodRequest: BloodUnitRequest): boolean {
    return bloodRequest.status == BloodUnitRequestStatus.REVIEWAGAIN || bloodRequest.status == BloodUnitRequestStatus.WAITING;
  }
}
