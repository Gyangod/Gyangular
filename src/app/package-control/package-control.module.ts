import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';
import { TimePickerModule } from '../common/timepicker/timepicker.module';

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
    TimePickerModule,
    PackageControlRoutingModule,
    MatTableModule,
    NgbModule,
    NgSelectModule,
    MatDialogModule
  ]
})
export class PackageControlModule {}
