import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderType } from '../enum/header-type.enum';
import { NotificationType } from '../enum/notification-type.enum';
import { GlobalService } from '../global/global.service';
import { User } from '../model/user';
import { AuthenticationService } from '../service/authentication.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  passwordText: boolean = true;
  confirmpasswordText: boolean = true;
  usernameTick: boolean = false;
  countryCodes: Map<string, string>;
  user: User = new User();
  public showLoading: boolean;
  private subscriptions: Subscription[] = [];

  constructor(private globalService: GlobalService, private router: Router, private authenticationService: AuthenticationService,
    private notificationService: NotificationService) {
    this.changeMenuIconToBack(true);
  }

  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn()) {
      this.router.navigateByUrl('/home');
    }
    this.countryCodes = this.authenticationService.loadCodes();
    if (this.countryCodes == undefined || this.countryCodes == null) {
      this.authenticationService.getCountryCodes().subscribe(value => {
        this.authenticationService.addCodesToLocalCache(value);
        this.countryCodes = value;
      });
    }
  }

  ngOnDestroy(): void {
    this.authenticationService.deleteCodes();
    this.subscriptions.forEach(sub => sub.unsubscribe());
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
      //main Signup process
      this.showLoading = true;
      this.subscriptions.push(
        this.authenticationService.register(this.user).subscribe(
          (response: HttpResponse<User>) => {
            const token = response.headers.get(HeaderType.JWT_TOKEN);
            this.authenticationService.saveToken(token);
            this.authenticationService.addUserToLocalCache(response.body);
            this.router.navigateByUrl('/home');
            this.showLoading = false;
          },
          (errorResponse: HttpErrorResponse) => {
            this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
            this.showLoading = false;
            forms.confirmPass = this.user.password;
          }
        )
      );
    }
  }
  private sendNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }
}

