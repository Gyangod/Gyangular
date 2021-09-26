import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PackageControlComponent } from './package-control.component';

const routes: Routes = [
  {
    path: 'create',
    children: [{
      path: ':method',
      component: PackageControlComponent
    }]
  },
  {
    path: 'update',
    children: [{
      path: ':id',
      component: PackageControlComponent
    }]
  },
  // {
  //   path: 'success'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageControlRoutingModule { }
