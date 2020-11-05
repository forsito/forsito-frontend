import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project.model';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  projects: Project[];

  constructor(
    private projectService: ProjectService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.projectService.getProjects().subscribe((projectArr) => {
      this.projects = projectArr;
      this.spinner.hide();
    });
  }

  onClick(id: string): void {
  // take the id from project.id then fetch it from server
    this.projectService.openModal(id);
  }
}
