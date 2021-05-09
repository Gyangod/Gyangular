import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

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
import { HomeComponent } from './home/home.component';
import { TeacherselectComponent } from './teacherselect/teacherselect.component';
import { VotingGroupComponent } from './voting-group/voting-group.component';
import { ProgramComponent } from './program/program.component';
import { GmapsComponent } from './gmaps/gmaps.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialViewComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    TeacherselectComponent,
    VotingGroupComponent,
    ProgramComponent,
    GmapsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    NgxMaterialTimepickerModule,
    MatSlideToggleModule,
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  // exports: [
  //   MatSlideToggle
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
