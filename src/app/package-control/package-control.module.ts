import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageControlRoutingModule } from './package-control-routing.module';
import { PackageControlComponent } from './package-control.component';


@NgModule({
  declarations: [
    PackageControlComponent
  ],
  imports: [
    CommonModule,
    PackageControlRoutingModule
  ]
})
export class PackageControlModule { }
