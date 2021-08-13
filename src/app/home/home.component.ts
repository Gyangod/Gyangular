import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../global/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private globalService: GlobalService) {
    
   }

  ngOnInit(): void {
    this.changeBottomNav(true);
  }
  changeBottomNav(newBottomNav: boolean): void {
    this.globalService.setBotttomNav(newBottomNav);
  }

}
