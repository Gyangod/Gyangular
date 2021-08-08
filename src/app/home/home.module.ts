import { NgModule } from '@angular/core';
import { TimePickerModule } from '../common/timepicker/timepicker.module';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from "./home.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    TimePickerModule,
  ]
})
export class HomeModule { }
