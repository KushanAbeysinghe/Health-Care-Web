import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


import { Feedback } from './feedback.model';

@Injectable()
export class FeedbackService {
  selectedFeedback: Feedback;
  feedbacks!: Feedback[];
  readonly baseURL = 'http://localhost:5000/employees';

  constructor(private http: HttpClient) { }

  
  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  postFeedback(emp: Feedback) {
    return this.http.post(this.baseURL, emp);
  }
}
