import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crew } from '../models/crew.model';
import { CrewService } from '../services/crew.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  id: string;
  user: Crew;
  constructor(
    private crewService: CrewService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // getting id from url
    this.id = this.route.snapshot.params.id;
    // getting user
    this.crewService.getUserByID(this.id).subscribe((user: Crew) => {
      this.user = user;
    });
  }
}
