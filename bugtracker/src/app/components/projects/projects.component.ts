import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/classes/Project';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects?: Project[];

  constructor(private projectService: ProjectService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      result => {
        console.log(result);
      }
    );
    this.projectService.getProjects().subscribe(
      (result) => {
        this.projects = result;
      })
  }

}
