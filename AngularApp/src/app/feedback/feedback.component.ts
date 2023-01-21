import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FeedbackService } from '../sharedfeedback/feedback.service';
import { Feedback } from '../sharedfeedback/feedback.model';

declare var M: any; 

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers: [FeedbackService]
})
export class FeedbackComponent implements OnInit {

  constructor(public feedbackService: FeedbackService) { }

  ngOnInit(){
    this.resetForm();
    this.refreshEmployeeList();
    
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.feedbackService.selectedFeedback = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary:""
    }
  }


  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.feedbackService.postFeedback(form.value).subscribe((res) => {
        this.resetForm(form);
        //location.reload();
        this.refreshEmployeeList();
        console.warn(res)
     //  M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
  }

    refreshEmployeeList() {
      this.feedbackService.getEmployeeList().subscribe((res)=>{
        this.feedbackService.feedbacks = res as Feedback[];
    });
  }

}

    

function refreshEmployeeList() {
  throw new Error('Function not implemented.');
}
