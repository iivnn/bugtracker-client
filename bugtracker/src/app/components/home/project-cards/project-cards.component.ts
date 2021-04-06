import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/Project';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.css']
})
export class ProjectCardsComponent implements OnInit {

  @Input() project?: Project;

  constructor() {
  }

  ngOnInit(): void {
  }

  getProjectURL(){
    return 'url(' + this.project?.photoURL + ')';
  }

}
