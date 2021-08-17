import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../global/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // grades: String[]= ["Class 8","Class 9","Class 10","Class 11","Class 12",,"Class 7","Class 6","Gate","IES","PSU"];
  gradeVar = [{ name: "Primary", value: ["Class 1","Class 2","Class 3","Class 4","Class 5"]  },
             {name: "Secondary", value: ["Class 6","Class 7","Class 8","Class 9","Class 10"] },
             {name: "Higher Secondary", value: ["Class 11","Class 12","Joint Entrance"] },
             {name: "Grads", value: ["GATE","IES","PSU"] },
  ];
  constructor(private globalService: GlobalService,private router: Router) {
    this.initializeValues(true,true);
   }

  ngOnInit(): void {
    
  }

  initializeValues(newBottomNav: boolean,menuIcon: boolean): void {
    this.globalService.setBotttomNav(newBottomNav);
    this.globalService.setMenuIcon(menuIcon);
  }

  selectTeacher(){
    this.router.navigateByUrl('/home/select');
  }

}
