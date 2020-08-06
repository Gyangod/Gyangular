import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fieldTextType: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
