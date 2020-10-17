import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './../models/message.model';
@Injectable({
  providedIn: 'root',
})
export class ContactMsgService {
  constructor(private http: HttpClient) {}
}
