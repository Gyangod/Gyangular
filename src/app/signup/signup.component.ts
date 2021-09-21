import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global/global.service';
import { User } from '../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  passwordText: boolean = true;
  confirmpasswordText: boolean = true;
  usernameTick: boolean = false;
  countryCodes: Map<string, string> = new Map<string, string>([["India", "+91"], ["United States", "+1"]]);
  user: User;

  constructor(private globalService: GlobalService) {
    this.changeMenuIconToBack(true);
  }

  ngOnInit(): void {
  }

  changeMenuIconToBack(menuIcon: boolean): void {
    this.globalService.setMenuIcon(menuIcon);
  }
  togglePasswordText(input: any) {
    this.passwordText = !this.passwordText;
    if (this.passwordText) {
      input.type = 'password';
    } else {
      input.type = 'text';
    }
  }
  toggleConfirmPasswordText(input: any) {
    this.confirmpasswordText = !this.confirmpasswordText;
    if (this.confirmpasswordText) {
      input.type = 'password';
    } else {
      input.type = 'text';
    }
  }
  checkUserName() {
    //todo: checkUserName from service
    this.usernameTick = true;
  }
  resetAll() {
    this.passwordText = true;
    this.confirmpasswordText = true;
    this.usernameTick = false;
  }
  onRegister(forms: any) {
    if (forms.confirmPass.toString() === forms.password.toString()) {
      delete forms.confirmPass;
      this.user = forms;
      console.log(this.user);
    }
  }
}
function typeOf(confirmPass: any): any {
  throw new Error('Function not implemented.');
}

