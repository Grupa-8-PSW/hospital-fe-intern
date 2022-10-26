import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examinations',
  templateUrl: './examinations.component.html',
  styleUrls: ['./examinations.component.css']
})
export class ExaminationsComponent implements OnInit {
  showAddExamination: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  addExamination() {
    this.router.navigate(['/examinations/create']);
  }

}
