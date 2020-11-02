import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crew } from 'src/app/models/crew.model';
import { Project } from 'src/app/models/project.model';
import { CrewService } from 'src/app/services/crew.service';
import { ProjectService } from 'src/app/services/project.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css'],
})
export class UserProjectsComponent implements OnInit {
  closeResult: string;
  // tslint:disable-next-line: variable-name
  project_clicked_id: string;
  id: string;
  userProjects: { _id: string; title: string }[];
  // tslint:disable-next-line: variable-name
  project_details: Project;

  constructor(
    private route: ActivatedRoute,
    private crewService: CrewService,
    private projectService: ProjectService,
    private modalService: NgbModal
  ) {}

  /*================================================================================== */
  // tslint:disable-next-line: typedef
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
  onClick(id: string): void {
    // take the id from project.id then fetch it from server
    this.project_clicked_id = id;
    this.projectService
      .getProject(this.project_clicked_id)
      // tslint:disable-next-line: variable-name
      .subscribe((spec_project) => {
        this.project_details = spec_project;
      });
  }
  /*================================================================================== */

  ngOnInit(): void {
    this.id = this.route.snapshot.parent.params.id;
    this.crewService.getUserByID(this.id).subscribe((result: Crew) => {
      this.userProjects = result.projects.slice();
    });
  }
}
