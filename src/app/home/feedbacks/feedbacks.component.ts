import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from 'src/app/models/feedback.model';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})

export class FeedbacksComponent implements OnInit {

feedbacks:Feedback[];

  constructor(private feedbacksService :FeedbackService) { }

  ngOnInit():void{
    this.feedbacksService.getFeedbacks()
    .subscribe((FeedbackArr) => {
      this.feedbacks = FeedbackArr;
      // console.log(this.feedbacks);
    });
  }
}