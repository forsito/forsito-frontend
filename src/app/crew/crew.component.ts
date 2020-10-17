import { Component, OnInit } from '@angular/core';
import { Crew } from '../models/crew.model';
import { CrewService } from '../services/crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css'],
})
export class CrewComponent implements OnInit {
  crew: Crew[];
  constructor(private crewService: CrewService) {}
  ngOnInit(): void {
    this.crewService.getAllCrew().subscribe((crewArr) => {
      this.crew = crewArr;
      console.log(this.crew);
    });
  }
}