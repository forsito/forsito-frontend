import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  dropmenu = false;
  @ViewChild('close') close:ElementRef;

  constructor() {}
  HasPermission = true;

  ngOnInit(): void {}

  drop(e) {
    this.dropmenu = !this.dropmenu;
  }

  onNavClick(){
    this.close.nativeElement.click();
  }
}
