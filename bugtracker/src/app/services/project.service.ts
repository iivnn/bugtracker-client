import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../classes/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get<Project[]>('/api/project');
  }
}
