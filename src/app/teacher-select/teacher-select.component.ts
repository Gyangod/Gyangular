import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../global/global.service';

@Component({
  selector: 'app-teacher-select',
  templateUrl: './teacher-select.component.html',
  styleUrls: ['./teacher-select.component.css']
})
export class TeacherSelectComponent implements OnInit {

  constructor(private globalService: GlobalService) { 
    this.changeMenuIconToBack(false);
  }

  ngOnInit(): void {

  }

  changeMenuIconToBack(menuIcon: boolean): void {
    this.globalService.setMenuIcon(menuIcon);
  }
}
