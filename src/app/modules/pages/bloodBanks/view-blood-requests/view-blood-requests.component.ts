import { formatDate } from './../../../shared/util/util';
import { CommonModule } from '@angular/common';
import { BloodBank } from 'src/app/model/bloodBank.model';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BloodUnitRequest } from 'src/app/model/bloodUnitRequest';
import { BloodRequestServiceService } from '../services/blood-request-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { BloodTypePipe } from '../pipes/blood-type.pipe';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-view-blood-requests',
  templateUrl: './view-blood-requests.component.html',
  styleUrls: ['./view-blood-requests.component.css']
})
export class ViewBloodRequestsComponent {

  requests: any[] = [];
  trigger: number = 0;
  displayedColumns: string[] = ['id', 'amountL', 'type', 'reason', 'creationDate', 'approve', 'reject'];

  dataSource = new MatTableDataSource(this.requests);

  constructor(private service: BloodRequestServiceService,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.service.getBloodRequests().subscribe(res => {
      const result = res.filter((r: any) => {
        return r.status === 2;
      })
      this.requests = result;
    })
  }

  reRender(){
    this.trigger ++;
  }

  changeStatusOfRequest(event: Event, id: any){
    var request = null;
    const element = event.target as HTMLElement;
      console.log(element.innerText);
      console.log(id);
      if(element.innerText === 'Approve'){
         request = this.requests.filter(req => {
          return req.id === id;
        })
        request[0].status = 1;
        this.service.changeRequestStatus(request[0]).subscribe(res=> {
          this.reRender();
       });
      // this.requests.pop(this.requests[req]);
      }
      else {
        request = this.requests.filter(req => {
          return req.id === id;
        })
        request[0].status = 0;
        this.service.changeRequestStatus(request[0]).subscribe(res=> {
          this.reRender();
       });

      }
  }


}
function convertDate(date: any, Date: DateConstructor) {
  throw new Error('Function not implemented.');
}

