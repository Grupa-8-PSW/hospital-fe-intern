import { Component, OnInit } from '@angular/core';
import { Feedback, FeedbackStatus } from '../model/feedback.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback-approval',
  templateUrl: './feedback-approval.component.html',
  styleUrls: ['./feedback-approval.component.css']
})
export class FeedbackApprovalComponent implements OnInit {

  public publicFeedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getPublicFeedback().subscribe(res => {
      this.publicFeedbacks = res;
    });
  }

  changeStatus(index: number, id: number, status: FeedbackStatus): void {
    this.feedbackService.changeStatus(id, status).subscribe(res => {
      this.publicFeedbacks[index].status = status;
    })
  }

}
