import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeedbackService } from '../sharedfeedback/feedback.service';
import { Feedback } from '../sharedfeedback/feedback.model';

declare var M: any; 

@Component({
  selector: 'app-admin-feedback',
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.css'],
  providers: [FeedbackService]
})
export class AdminFeedbackComponent {

  constructor(public feedbackService: FeedbackService) { }

  ngOnInit(){
    //this.resetForm();
    this.refreshEmployeeList();
    
  }

    refreshEmployeeList() {
      this.feedbackService.getEmployeeList().subscribe((res)=>{
        this.feedbackService.feedbacks = res as Feedback[];
        console.warn("feedback",this.feedbackService);
    });
  }

}

    
function refreshEmployeeList() {
  throw new Error('Function not implemented.');
}





