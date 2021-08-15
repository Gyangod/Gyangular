import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialViewComponent } from './initial-view/initial-view.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
// import { TeacherselectComponent } from './teacherselect/teacherselect.component';
import { VotingGroupComponent } from './voting-group/voting-group.component';
// import { CalendarComponent } from './calendar/calendar.component';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: InitialViewComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    // component: HomeComponent,
  },
  {
    path: 'voting',
    // loadChildren: () => import('./voting-group/voting-group.component').then(m => m.VotingGroupComponent)
    component: VotingGroupComponent,
  },
  {
    path: 'maps',
    loadChildren: () => import('./gmaps/gmaps.module').then(m => m.GmapsModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarPersonalModule)
    // component: CalendarComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
      
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
