import { NgModule } from '@angular/core';
import { TimePickerModule } from '../common/timepicker/timepicker.module';


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
  ],
  providers: [
    // GlobalService,
  ]
})
export class HomeModule { }
