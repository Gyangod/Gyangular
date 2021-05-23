import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoogleMapsComponent} from './google-maps/google-maps.component';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GmapsRoutingModule { }