import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Message } from '../models/message.model';
import { ContactMsgService } from '../services/contact-msg.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  constructor(
    private msgService: ContactMsgService,
    private toastr: ToastrService
  ) {}
  ContactUs: FormGroup;
  // tslint:disable-next-line: typedef
  ToasterSuccess() {
    this.toastr.success('Message Sent Successfully', 'Great!');
  }
  // tslint:disable-next-line: typedef
  ToasterFail(title: string, msg: string) {
    this.toastr.error(msg, title);
  }
  /*====================================================================================================*/
  ngOnInit(): void {
    // creating form with reactive module
    this.ContactUs = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
      message: new FormControl(null),
    });
  }
  /*====================================================================================================*/
  // tslint:disable-next-line: typedef
  onSubmit() {
    // styling inputs borders colors to none
    /*==================================================================================================*/
    const inputarr = document.getElementsByTagName('input');
    // tslint:disable-next-line: curly
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < inputarr.length; i++) {
      inputarr[i].style.border = 'none';
    }
    const textarea = document.getElementsByTagName('textarea')[0];
    textarea.style.border = 'none';
    /*====================================================================================================*/
    // submitting the form and post the msg to the db
    const contactForm = this.ContactUs.value;
    // use constructor to post data as it doesn't work when submitting with the form value directly
    const msg = new Message(
      contactForm.name,
      contactForm.email,
      contactForm.phone,
      contactForm.message
    );
    // sending post request to the server contains message and sender data
    this.msgService
      .PostMessage(msg)
      .toPromise()
      .then((response) => {
        // reseting form values to null after submitting successfully
        this.ContactUs.setValue({
          name: null,
          email: null,
          phone: null,
          message: null,
        });
        this.ToasterSuccess();
      })
      .catch((err) => {
        // looping error array to make it readable for user
        err.error.data.forEach((elementErr) => {
          /*
          # defining error object keys
          1- field name = elementErr.param ;
          2- fieldValue = elementErr.value;
          3- fieldError = elementErr.msg;
          */
          // tslint:disable-next-line: triple-equals
          // =========================================================
          // require data from user if the field is empty
          if (elementErr.value === null || elementErr.value === '') {
            // errors of empty fields
            document.getElementById(elementErr.param).style.border =
              '2.8px solid #C23240';
            const Title = elementErr.param;
            const ToasterMsg = 'Value Required';
            this.ToasterFail(Title, ToasterMsg);
          } else {
            // errors of invalid data
            this.ToasterFail(elementErr.param, elementErr.msg);
            document.getElementById(elementErr.param).style.border =
              '2.8px solid #C23240';
          }
        });
      });
  }
}
