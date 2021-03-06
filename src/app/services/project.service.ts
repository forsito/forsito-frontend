import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { domainName } from './domain';
import { Subject } from 'rxjs';

const domain = domainName;

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  open = new Subject<{ _id: string }>();

  // tslint:disable-next-line: typedef
  getProjects() {
    return this.http.get<Project[]>(`${domain}/Projects/getAll`);
  }

  // tslint:disable-next-line: typedef
  getProject(ProjectId: string) {
    return this.http.get<Project>(`${domain}/Projects/${ProjectId}/get`);
  }
  // tslint:disable-next-line: typedef
  openModal(projectId: string) {
    this.open.next({ _id: projectId });
  }
}
