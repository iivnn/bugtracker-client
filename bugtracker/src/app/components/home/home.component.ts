import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../../services/global-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private globalData: GlobalDataService) { }

  ngOnInit(): void {
  }

  showUserData(){
    console.log(this.globalData.userInfo)
  }

}
