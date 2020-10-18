import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Crew } from './../models/crew.model';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  constructor(private http: HttpClient) {}

  // getting all crew members and returning array of objects all objects of type crew
  getAllCrew() {
    return this.http.get<Crew[]>('http://localhost:3000/api/crew/getAll');
  }
}
