import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './../models/message.model';
@Injectable({
  providedIn: 'root',
})
export class ContactMsgService {
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line: typedef
  PostMessage(message: Message) {
    return this.http.post<Message>(
      'http://localhost:3000/api/messages/add',
      message
    );
  }
}
