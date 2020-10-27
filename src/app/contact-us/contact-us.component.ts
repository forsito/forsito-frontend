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
    // hide error paragraphs
    const p = document.getElementsByTagName('p');
    // tslint:disable-next-line: curly
    for (let i = 0; i < p.length - 1; i++) {
      p[i].innerHTML = '';
    }
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
            document.getElementsByClassName(elementErr.param)[0].innerHTML =
              '<strong>' +
              'Error : ' +
              '</strong>' +
              '&nbsp;' +
              elementErr.param +
              ' is required' +
              '<br>';
          } else {
            // errors of invalid data
            document.getElementsByClassName(elementErr.param)[0].innerHTML =
              '<strong> Error : </strong>&nbsp;' + elementErr.msg;
          }
        });
      });
  }
}
