import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PackageOccurence } from 'src/app/model/package-occurence';
import { OccurenceConfig } from './occurence.config';
import { DaysInWeek } from '../../enum/daysInWeek.enum';

@Component({
  selector: 'app-occurence',
  templateUrl: './occurence.component.html',
  styleUrls: ['./occurence.component.css']
})
export class OccurenceComponent implements OnInit {

  packOccurence: PackageOccurence;
  // tempPack: PackageOccurence;
  days = new Map(Object.entries(DaysInWeek));

  constructor(
    public dialogRef: MatDialogRef<OccurenceComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: OccurenceConfig
  ) {
    this.packOccurence = Object.assign({},dialogData.occuerence);
    // this.packOccurence = dialogData.occuerence;
  }
  ngOnInit(): void {

  }

  handleSubmit() {
    // this.tempPack = this.packOccurence;
    this.dialogRef.close(this.packOccurence);
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  asIsOrder(a, b) {
    return 1;
  }

}
