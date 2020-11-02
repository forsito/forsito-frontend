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
    const collapse = document.getElementById('navbarNavDropdown');
    const show=collapse.classList.contains('show');
    
    if(show) this.close.nativeElement.click();
  }
}
