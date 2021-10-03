import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OccurenceConfig } from './occurence.config';

@Component({
  selector: 'app-occurence',
  templateUrl: './occurence.component.html',
  styleUrls: ['./occurence.component.css']
})
export class OccurenceComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<OccurenceComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: OccurenceConfig
  ) {}
  ngOnInit(): void {}

  handleDialogSubmit() {
    this.dialogRef.close();
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}
