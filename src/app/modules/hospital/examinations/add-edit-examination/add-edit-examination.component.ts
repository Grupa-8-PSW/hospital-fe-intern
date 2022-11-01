import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-examination',
  templateUrl: './add-edit-examination.component.html',
  styleUrls: ['./add-edit-examination.component.css']
})
export class AddEditExaminationComponent implements OnInit {
  examinationForm!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.examinationForm = new FormGroup({

    });
  }

}
