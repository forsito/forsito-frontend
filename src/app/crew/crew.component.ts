import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Crew } from '../models/crew.model';
import { CrewService } from '../services/crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css'],
})
export class CrewComponent implements OnInit {
  // defined the crew array which recive data get by the service
  crew: Crew[];
  // define the service to use it
  constructor(
    private crewService: CrewService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    // this.spinner.show();
    // firing the subject to get data from backend
    this.crewService.getAllCrew().subscribe((crewArr) => {
      this.crew = crewArr;
      // console.log(crewArr);
      // this.spinner.hide();
    });
  }
}
