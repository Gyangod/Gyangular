import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  fieldTextType: boolean;
  status: number = 1;
  constructor() {
  }

  ngOnInit(): void {
  }

}
