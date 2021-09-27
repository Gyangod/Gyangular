import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { PackageControlRoutingModule } from './package-control-routing.module';
import { PackageControlComponent } from './package-control.component';


@NgModule({
  declarations: [
    PackageControlComponent
  ],
  imports: [
    CommonModule,
    PackageControlRoutingModule,
    MatTableModule
  ]
})
export class PackageControlModule { }
