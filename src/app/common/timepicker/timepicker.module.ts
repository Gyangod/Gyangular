import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
