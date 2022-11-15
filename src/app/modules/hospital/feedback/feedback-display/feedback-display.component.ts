import { Component, OnInit } from '@angular/core';
import { Feedback } from '../model/feedback.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback-display',
  templateUrl: './feedback-display.component.html',
  styleUrls: ['./feedback-display.component.css']
})
export class FeedbackDisplayComponent implements OnInit {

  public Feedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getAllFeedbacks().subscribe(response=>{
      this.Feedbacks=response;
    })
  }

}
