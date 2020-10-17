import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Crew } from './../models/crew.model';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  constructor(private http: HttpClient) {}

  getAllCrew(){
    return this.http.get<Crew[]>('http://localhost:3000/api/crew/getAll');
  }
}