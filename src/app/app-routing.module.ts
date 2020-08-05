import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialViewComponent } from './initial-view/initial-view.component';

const routes: Routes = [
  {
    path: '',
    component: InitialViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
