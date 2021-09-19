import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InitialViewComponent } from './initial-view/initial-view.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { VotingGroupComponent } from './voting-group/voting-group.component';
import { AuthenticationService } from './service/authentication.service';
import { UserService } from './service/user.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthenticationGuard } from './guard/authentication.guard';
import { NotificationModule } from './notification.module';
import { NotificationService } from './service/notification.service';


@NgModule({
  declarations: [
    AppComponent,
    InitialViewComponent,
    SignupComponent,
    LoginComponent,
    VotingGroupComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    // NgbModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    NotificationModule
  ],
  providers: [
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthenticationGuard,
    NotificationService,
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [

  ]
})
export class AppModule { }
