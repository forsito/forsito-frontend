import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { domainName }  from './domain';
import { Feedback } from '../models/feedback.model';


const domain = domainName ;

@Injectable({
  providedIn: 'root'
})


export class FeedbackService {
  constructor( private http: HttpClient) { }

getFeedbacks(){
return this.http.get<Feedback[]>(`${domain}/feedback/getAll`);
}



getFeedback(feedbackId : string){
  return this.http.get<Feedback[]>(`${domain}/feedback${feedbackId}get`);
 }

}
