import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './../models/message.model';
import { domainName } from './domain';

const domain = domainName ;


@Injectable({
  providedIn: 'root',
})



export class ContactMsgService {
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line: typedef
  PostMessage(message: Message) {
    return this.http.post<Message>(
      `${domain}/messages/add`,
      message
    );
  }
}
