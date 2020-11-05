import { Component,  Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';



@Component({
  selector: 'app-project-details-modal',
  templateUrl: './project-details-modal.component.html',
  styleUrls: ['./project-details-modal.component.css']
})
export class ProjectDetailsModalComponent {

constructor() {}

@Input() project_details: Project;

}
