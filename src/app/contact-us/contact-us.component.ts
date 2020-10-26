import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Message } from '../models/message.model';
import { ContactMsgService } from '../services/contact-msg.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  constructor(private msgService: ContactMsgService) {}

  ContactUs: FormGroup;

  ngOnInit(): void {
    // creating form with reactive module
    this.ContactUs = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
      message: new FormControl(null),
    });
  }
  // tslint:disable-next-line: typedef
  onSubmit() {
    // submitting the form and post the msg to the db
    const contactForm = this.ContactUs.value;
    // use constructor to post data as it doesn't work when submitting with the form value directly
    const msg = new Message(
      contactForm.name,
      contactForm.email,
      contactForm.phone,
      contactForm.message
    );
    this.msgService
      .PostMessage(msg)
      .toPromise()
      .then((response) => {
        console.log(response);
        this.ContactUs.setValue({
          name: null,
          email: null,
          phone: null,
          message: null,
        });
      })
      .catch((err) => {
        // console.log(...err.error.data);
        err.error.data.forEach((elementErr) => {
          console.log(elementErr.param, elementErr.value, elementErr.msg);
          // tslint:disable-next-line: triple-equals
          if (elementErr.value == null || elementErr.value == '') {
          }
        });
      });
  }
}
