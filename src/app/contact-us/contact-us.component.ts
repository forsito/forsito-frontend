import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  constructor() {}

  ContactUs: FormGroup;

  ngOnInit(): void {
    this.ContactUs = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      mobile: new FormControl(null),
      msg: new FormControl(null),
    });
  }
  onSubmit() {
    console.log(this.ContactUs.value);
  }
}
