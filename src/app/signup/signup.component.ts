import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../global/global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  fieldTextType: boolean;
  status: number = 1;
  constructor(private globalService: GlobalService) {
    this.changeMenuIconToBack(true);
  }

  ngOnInit(): void {
  }

  changeMenuIconToBack(menuIcon: boolean): void {
    this.globalService.setMenuIcon(menuIcon);
  }
}
