import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PackageControlComponent } from './package-control.component';
import { PackageSuccessComponent } from '../package-success/package-success.component';
import { PackageViewComponent } from '../package-view/package-view.component';

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
  {
    path: 'success',
    component: PackageSuccessComponent
  },
  {
    path: 'view',
    component: PackageViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageControlRoutingModule { }
