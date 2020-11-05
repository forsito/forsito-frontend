import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-details-modal',
  templateUrl: './project-details-modal.component.html',
  styleUrls: ['./project-details-modal.component.css'],
})
export class ProjectDetailsModalComponent implements OnInit, OnDestroy {
  closeResult: string;
  // tslint:disable-next-line: variable-name
  project_details: Project;
  @ViewChild('content') content: TemplateRef<NgbModal>;
  subscription: Subscription;

  constructor(
    private modalService: NgbModal,
    private projectService: ProjectService
  ) {}

  // tslint:disable-next-line: typedef
  open() {
    this.modalService
      .open(this.content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
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

  ngOnInit(): void {
    this.subscription = this.projectService.open.subscribe((id) => {
      this.projectService
        .getProject(id._id)
        // tslint:disable-next-line: variable-name
        .subscribe((spec_project) => {
          this.project_details = spec_project;
          this.open();
        });
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
