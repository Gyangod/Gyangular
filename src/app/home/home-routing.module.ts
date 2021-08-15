import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home.component";
import { TeacherSelectComponent } from '../teacher-select/teacher-select.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent,
},
{
  path: 'select',
  component: TeacherSelectComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
