import { NgModule } from '@angular/core';
import { TimePickerModule } from '../common/timepicker/timepicker.module';
import { NgSelectModule } from '@ng-select/ng-select';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from "./home.component";
// import {GlobalService} from '../global/global.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    TimePickerModule,
    NgSelectModule
  ],
  providers: [
    // GlobalService,
  ]
})
export class HomeModule { }
