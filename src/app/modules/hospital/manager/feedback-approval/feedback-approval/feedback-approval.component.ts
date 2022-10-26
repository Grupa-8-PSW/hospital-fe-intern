import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../model/feedback.model';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback-approval',
  templateUrl: './feedback-approval.component.html',
  styleUrls: ['./feedback-approval.component.css']
})
export class FeedbackApprovalComponent implements OnInit {

  public feedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getPublicFeedback().subscribe(res => {
      this.feedbacks = res;
    });
  }

}
