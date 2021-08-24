import { Component, OnInit,HostListener } from '@angular/core';
import {GlobalService} from '../global/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-select',
  templateUrl: './teacher-select.component.html',
  styleUrls: ['./teacher-select.component.css']
})
export class TeacherSelectComponent implements OnInit {
  math = Math;
  teachers = [{
    name: 'Ayush Jain', 
    subjects:['Maths','Science'],
    rating: 4.4,
    price: [{span: 'weekly', rate: 300},{span:'monthly', rate: 1000}]
  },
  {
    name: 'Balaji Panner Selvam', 
    subjects:['Computer'],
    rating: 2.3,
    price: [{span: 'weekly', rate: 500},{span:'monthly', rate: 2000}]
  },
  {
    name: 'Amrita Chakraborty', 
    subjects:['Computer','IT','Physics','Chemistry'],
    rating: 3.2,
    price: [{span: 'weekly', rate: 500},{span:'monthly', rate: 2000}]
  },
  {
    name: 'Someone with very bug name that will not fit in this', 
    subjects:['All Subjects'],
    rating: 1.0,
    price: [{span: 'weekly', rate: 500},{span:'monthly', rate: 2000}]
  },
];
  constructor(private globalService: GlobalService,private router: Router) { 
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
  selectedTeacher(index: any): void {
    console.log(index);
    this.router.navigateByUrl('/home/batch',index);
  }
}
