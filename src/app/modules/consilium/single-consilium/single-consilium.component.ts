import { Component, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Doctor from 'src/app/model/doctor';
import Consilium from '../model/Consilium';

@Component({
  selector: 'app-single-consilium',
  templateUrl: './single-consilium.component.html',
  styleUrls: ['./single-consilium.component.css']
})
export class SingleConsiliumComponent {
  @Input("consilium") consilium!: Consilium;
  selectedParticipants: Doctor[] = [];
  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  openModal(template: TemplateRef<any>, participants: Doctor[]) {
    this.selectedParticipants = participants;
    this.modalRef = this.modalService.show(template);
  }
}
