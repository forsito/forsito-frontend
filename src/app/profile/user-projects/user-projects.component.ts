import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crew } from 'src/app/models/crew.model';
import { Project } from 'src/app/models/project.model';
import { CrewService } from 'src/app/services/crew.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css'],
})
export class UserProjectsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private crewService: CrewService,
    private projectService: ProjectService
  ) {}

  id: string;
  user: Crew;
  userProjects: Project[];

  ngOnInit(): void {
    this.id = this.route.snapshot.parent.params.id;
    this.crewService.getUserByID(this.id).subscribe((result: Crew) => {
      this.user = result;
      /*Getting user projects*/
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.user.projects.length; i++) {
        const projectId = this.user.projects[i];
        console.log(projectId);
        // this.projectService
        //   .getProject(projectId)
        //   .subscribe((project: Project) => {
        //     this.userProjects[i] = project;
        //   });
      }
    });
  }
}
