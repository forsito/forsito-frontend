import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { domainName } from './domain';

const domain = domainName ;

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  constructor( private http: HttpClient) { }

getProjects(){
 return this.http.get<Project[]>(`${domain}/Projects/getAll`);
}

getProject(ProjectId : string){
  return this.http.get<Project>(`${domain}/Projects/${ProjectId}/get`);
 }

}

