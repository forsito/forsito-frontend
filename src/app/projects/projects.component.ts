import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project.model';
import { NgbModal , ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  
  project_clicked_id: string ;
  project_details :Project;

  projects : Project[];
  closeResult : string;

  constructor( private projectService : ProjectService ,
               private modalService: NgbModal) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projectArr) => {
      this.projects = projectArr;
    });
  }
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

 onClick(id:string):void{
   //take the id from project.id then fetch it from server 
   this. project_clicked_id = id;
   this.projectService.getProject(this. project_clicked_id)
      .subscribe((spec_project) => {
       this.project_details = spec_project ;
   });
  }

}
