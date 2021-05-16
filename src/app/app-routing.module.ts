import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialViewComponent } from './initial-view/initial-view.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: InitialViewComponent,
  },
  {
    path: 'signup',
    // loadChildren: () => import('./signup/signup.component').then(m => m.SignupComponent)
    component: SignupComponent,
  },
  {
    path: 'login',
    // loadChildren: () => import('./login/login.component').then(m => m.LoginComponent)
    component: LoginComponent,
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.component').then(m => m.HomeComponent)
    // component: HomeComponent,
  },
  {
    path: 'select',
    loadChildren: () => import('./teacherselect/teacherselect.component').then(m => m.TeacherselectComponent)
    // component: TeacherselectComponent,
  },
  {
    path: 'voting',
    loadChildren: () => import('./voting-group/voting-group.component').then(m => m.VotingGroupComponent)
    // component: VotingGroupComponent,
  },
  {
    path: 'maps',
    loadChildren: () => import('./gmaps/gmaps.component').then(m => m.GmapsComponent)
    // component: GmapsComponent,
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.component').then(m => m.CalendarComponent)
    // component: CalendarComponent,
  }
  // { 
  //   path: 'groups', 
  //   loadChildren: () => import('./group/group.module').then(m => m.GroupModule) 
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
