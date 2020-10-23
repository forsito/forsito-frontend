import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Crew } from './../models/crew.model';
import { domainName } from './domain';

const domain = domainName ;

@Injectable({
  providedIn: 'root',
})

export class CrewService {
  constructor(private http: HttpClient) {}

  // getting all crew members and returning array of objects all objects of type crew
  getAllCrew() {
    return this.http.get<Crew[]>(`${domain}/crew/getAll`); 
  }
}
