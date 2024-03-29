import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';
import { TimePickerModule } from '../common/timepicker/timepicker.module';

import { PackageControlRoutingModule } from './package-control-routing.module';
import { PackageControlComponent } from './package-control.component';
import { OccurenceComponent } from '../modal/occurence/occurence.component';
import { ConfirmComponent } from '../modal/confirm/confirm.component';
import { PackageSuccessComponent } from '../package-success/package-success.component';
import { PackageViewComponent } from '../package-view/package-view.component';


@NgModule({
  declarations: [
    PackageControlComponent,
    OccurenceComponent,
    ConfirmComponent,
    PackageSuccessComponent,
    PackageViewComponent,
  ],
  imports: [
    TimePickerModule,
    PackageControlRoutingModule,
    MatTableModule,
    // NgbModule,
    NgSelectModule,
    MatDialogModule
  ]
})
export class PackageControlModule {}
