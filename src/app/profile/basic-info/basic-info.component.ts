import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crew } from 'src/app/models/crew.model';
import { CrewService } from 'src/app/services/crew.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
})
export class BasicInfoComponent implements OnInit {
  id: string;
  user: Crew;
  constructor(
    private crewService: CrewService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // getting id from url
    this.id = this.route.snapshot.parent.params.id;
    console.log(this.id);
    // getting user
    this.crewService.getUserByID(this.id).subscribe((user: Crew) => {
      this.user = user;
    });
  }
}
