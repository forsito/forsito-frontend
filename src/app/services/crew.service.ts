import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Crew } from './../models/crew.model';
import { domainName } from './domain';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  constructor(private http: HttpClient) {}

  // getting all crew members and returning array of objects all objects of type crew
  // tslint:disable-next-line: typedef
  getAllCrew() {
    return this.http.get<Crew[]>(`${domainName}/crew/getAll`);
  }
  // tslint:disable-next-line: typedef
  getUserByID(id: string) {
    return this.http.get<Crew>(`${domainName}/crew/${id}/get`);
  }
}
