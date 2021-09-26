import { NgModule } from '@angular/core';
import { TimePickerModule } from '../common/timepicker/timepicker.module';
import { NgSelectModule } from '@ng-select/ng-select';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from "./home.component";
import { TeacherSelectComponent } from '../teacher-select/teacher-select.component';
import { TeacherPreviewComponent } from '../teacher-preview/teacher-preview.component';
import { PackageControlModule } from '../package-control/package-control.module';
// import {GlobalService} from '../global/global.service';

@NgModule({
  declarations: [
    HomeComponent,
    TeacherSelectComponent,
    TeacherPreviewComponent
  ],
  imports: [
    HomeRoutingModule,
    TimePickerModule,
    NgSelectModule,
    PackageControlModule,
  ],
  providers: [
    // GlobalService,
  ]
})
export class HomeModule { }
