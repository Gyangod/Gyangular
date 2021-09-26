import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home.component";
import { TeacherSelectComponent } from '../teacher-select/teacher-select.component';
import { TeacherPreviewComponent } from '../teacher-preview/teacher-preview.component';
import { AuthenticationGuard } from '../guard/authentication.guard';

const routes: Routes = [
{
  path: '',
  component: HomeComponent,
},
{
  path: 'select',
  component: TeacherSelectComponent,
},
{
  path: 'batch',
  component: TeacherPreviewComponent,
},
{
  path: 'pack',
  loadChildren: () => import('../package-control/package-control.module').then(m => m.PackageControlModule),
  canActivate: [AuthenticationGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
