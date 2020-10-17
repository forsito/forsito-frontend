import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:Project[];
  constructor(private projectService : ProjectService) { }

  ngOnInit(): void{
    this.projectService.getProjects().subscribe((projectArr) => {
      this.projects = projectArr;
      console.log(this.projects);
    });
  }

}
