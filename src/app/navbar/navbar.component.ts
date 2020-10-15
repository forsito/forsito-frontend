import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  dropmenu = false;
  constructor() {}
  HasPermission = true;

  ngOnInit(): void {}

  drop(e) {
    this.dropmenu = !this.dropmenu;
  }
}
