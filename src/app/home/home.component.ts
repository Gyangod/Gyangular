import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../global/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  grades: String[]= ["Class 8","Class 9","Class 10","Class 11","Class 12","Class 1","Class 2","Class 3","Class 4","Class 5","Class 7","Class 6","Gate","IES","PSU"];

  constructor(private globalService: GlobalService) {
    
   }

  ngOnInit(): void {
    this.changeBottomNav(true);
  }

  changeBottomNav(newBottomNav: boolean): void {
    this.globalService.setBotttomNav(newBottomNav);
  }

}
