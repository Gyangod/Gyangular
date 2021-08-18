import { Component, OnInit,HostListener } from '@angular/core';
import {GlobalService} from '../global/global.service';

@Component({
  selector: 'app-teacher-select',
  templateUrl: './teacher-select.component.html',
  styleUrls: ['./teacher-select.component.css']
})
export class TeacherSelectComponent implements OnInit {

  teachers = [{
    name: 'Ayush Jain', 
    subjects:['Maths','Science'],
    rating: 4.5,
    price: [{span: 'weekly', rate: 300},{span:'monthly', rate: 1000}]
  },
  {
    name: 'Balaji Panner Selvam', 
    subjects:['Computer'],
    rating: 4.5,
    price: [{span: 'weekly', rate: 500},{span:'monthly', rate: 2000}]
  },
];
  constructor(private globalService: GlobalService) { 
    this.changeMenuIconToBack(false);
  }

  ngOnInit(): void {

  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    console.log('Back button pressed');
    //TODO: make a popup to edit the state
  }

  changeMenuIconToBack(menuIcon: boolean): void {
    this.globalService.setMenuIcon(menuIcon);
  }
}
