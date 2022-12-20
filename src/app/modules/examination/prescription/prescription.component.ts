import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { PrescriptionItemComponent } from '../prescription-item/prescription-item.component';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent {

  @ViewChild('ChildInsertionPoint', { read: ViewContainerRef })
  childInsertionPoint!: ViewContainerRef;

  addPrescriptionItemComponent(): void{
    this.childInsertionPoint.createComponent(PrescriptionItemComponent);

  };

}
