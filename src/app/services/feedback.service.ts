import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../models/feedback.model';


const domain ='http://localhost:3000/api/feedback';

@Injectable({
  providedIn: 'root'
})


export class FeedbackService {
  constructor( private http: HttpClient) { }

getFeedbacks(){
 return this.http.get<Feedback[]>(`${domain}/getAll`);
}

getFeedback(feedbackId : string){
  return this.http.get<Feedback[]>(`${domain}/${feedbackId}get`);
 }

}
