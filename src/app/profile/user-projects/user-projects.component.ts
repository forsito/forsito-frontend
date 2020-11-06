import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crew } from 'src/app/models/crew.model';
import { CrewService } from 'src/app/services/crew.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css'],
})
export class UserProjectsComponent implements OnInit {
  id: string;
  userProjects: { _id: string; title: string }[];
  length: number;

  constructor(
    private route: ActivatedRoute,
    private crewService: CrewService,
    private projectService: ProjectService
  ) {}

  /*================================================================================== */
  onClick(id: string): void {
    // take the id from project.id then fetch it from server
    this.projectService.openModal(id);
  }
  /*================================================================================== */

  ngOnInit(): void {
    this.id = this.route.snapshot.parent.params.id;
    this.crewService.getUserByID(this.id).subscribe((result: Crew) => {
      this.userProjects = result.projects.slice();
      this.length = this.userProjects.length;
      console.log(this.length);
    });
  }
}
