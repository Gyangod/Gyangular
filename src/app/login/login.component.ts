import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../global/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fieldTextType: boolean;
  constructor(private globalService:GlobalService) { }

  ngOnInit(): void {
    this.globalService.setBotttomNav(false);
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
