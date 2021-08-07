import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
////////////////////////////////time-picker
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxMaterialTimepickerModule
  ],
  exports: [
    NgxMaterialTimepickerModule,
    CommonModule
  ]
})
export class TimePickerModule { }
