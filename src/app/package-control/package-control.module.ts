import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';

import { PackageControlRoutingModule } from './package-control-routing.module';
import { PackageControlComponent } from './package-control.component';
import { OccurenceComponent } from '../modal/occurence/occurence.component';
import { DeleteOccurenceComponent } from '../modal/delete-occurence/delete-occurence.component';


@NgModule({
  declarations: [
    PackageControlComponent,
    OccurenceComponent,
    DeleteOccurenceComponent
  ],
  imports: [
    CommonModule,
    PackageControlRoutingModule,
    MatTableModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    MatDialogModule
  ]
})
export class PackageControlModule {}
