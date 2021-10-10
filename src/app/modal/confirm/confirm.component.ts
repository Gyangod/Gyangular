import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmConfig } from './confirm.config';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(
    public confirmRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA)
    public confirmData: ConfirmConfig
  ) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.confirmRef.close("OK");
  }
  closeDialog(): void {
    this.confirmRef.close();
  }

}
