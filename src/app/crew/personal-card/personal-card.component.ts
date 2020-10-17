import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css'],
})
export class PersonalCardComponent implements OnInit {
  constructor() {}
  @Input() crewmate: { image: string, name: string, title: string, bio: string };
  ngOnInit(): void {}
}
