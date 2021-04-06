import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/Project';
import { ProjectService } from 'src/app/services/project.service';
import { GlobalDataService } from '../../services/global-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects?: Project[];

  constructor(private globalData: GlobalDataService,
              private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(
      (result) => {
        this.projects = result;
      })
  }
}
