import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageOccurence } from '../model/package-occurence';
import { OccurenceComponent } from '../modal/occurence/occurence.component';
import { OccurenceConfig } from '../modal/occurence/occurence.config';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FormControl } from '@angular/forms';
// import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
// import { CustomAdapter, CustomDateParserFormatter } from '../global/global.datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ConfirmConfig } from '../modal/confirm/confirm.config';
import { ConfirmComponent } from '../modal/confirm/confirm.component';
import { NotificationService } from '../service/notification.service';
import { NotificationType } from '../enum/notification-type.enum';
import { Packages } from '../model/packages';


@Component({
  selector: 'app-package-control',
  templateUrl: './package-control.component.html',
  styleUrls: ['./package-control.component.css'],
  providers: [
    // { provide: NgbDateAdapter, useClass: CustomAdapter },
    // { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ]
})
export class PackageControlComponent implements OnInit {

  NEW_BATCH_NAME: string = "new Batch";
  package: Packages = {
    visibility: true,
    isActive: true,
    refundable: true,
    fixedCourse: false,
    anyoneCanAddBatch: false,
    mapOccurrences: new Map([]),
  } as Packages;
  gradeVar = [{ name: "Primary", value: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"] },
  { name: "Secondary", value: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"] },
  { name: "Higher Secondary", value: ["Class 11", "Class 12", "Joint Entrance"] },
  { name: "Grads", value: ["GATE", "IES", "PSU"] },
  ];

  // model: NgbDateStruct;
  @ViewChildren(MatTable) tables: QueryList<MatTable<PackageOccurence>>;

  displayedColumns: string[] = ['actions', 'from', 'to', 'day'];
  courseEnabler: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public dialog: MatDialog, private notificationService: NotificationService) {
  }

  addOccuerence(key: string, index: number): void {
    let dialogInterface: OccurenceConfig = {
      dialogHeader: 'Add an Occuerence',
      confirmButtonLabel: 'Submit',
      occuerence: { fromTime: null, toTime: null, timeDifferent: null, isActive: true, repeatable: true, day: "" }
    };
    this.dialog.open(OccurenceComponent, {
      width: '30em',
      data: dialogInterface,
      disableClose: true,
    }).afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.package.mapOccurrences.get(key).push(result);
        this.tables.forEach(ele => ele.renderRows());
        this.sendNotification(NotificationType.SUCCESS, "Occurence Added Successfully in " + key);
      }
    });
  }

  ngOnInit(): void {
    if (this.router.url.toString().includes("update")) {
      console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    } else {
      //TEACH or LEARN
      console.log(this.activatedRoute.snapshot.paramMap.get('method'));
    }
  }

  addPackOccurence(): void {
    if (this.package.mapOccurrences.has(this.NEW_BATCH_NAME)) {
      this.sendNotification(NotificationType.ERROR, "Please Change existing Batch name \"" + this.NEW_BATCH_NAME + "\" to add new");
      return;
    }
    this.package.mapOccurrences.set(this.NEW_BATCH_NAME, []);
    this.sendNotification(NotificationType.SUCCESS, "New Batch added with name " + this.NEW_BATCH_NAME);
  }

  editOccurence(key: string, value: number): void {
    let dialogInterface: OccurenceConfig = {
      dialogHeader: 'Edit the Occuerence',
      confirmButtonLabel: 'Update',
      occuerence: this.package.mapOccurrences.get(key)[value]
    };
    this.dialog.open(OccurenceComponent, {
      width: '30em',
      data: dialogInterface,
      disableClose: true,
    }).afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.package.mapOccurrences.get(key)[value] = result;
        this.tables.forEach(ele => ele.renderRows());
        this.sendNotification(NotificationType.DEFAULT, "Occurence Updated");
      }
    });
  }

  deleteOccurence(key: string, value: number): void {
    let confirmInterface: ConfirmConfig = {
      dialogHeader: 'Delete Occuerence',
      confirmButtonLabel: 'Delete',
      dialogBody: 'Are you sure you want to delete?',
      danger: true
    };
    this.dialog.open(ConfirmComponent, {
      width: '30em',
      data: confirmInterface,
    }).afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.package.mapOccurrences.get(key).splice(value, 1);
        this.tables.forEach(ele => ele.renderRows());
        this.sendNotification(NotificationType.INFO, "Occuerence Deleted");
      }
    });
  }
  deleteBatch(key: string): void {
    let confirmInterface: ConfirmConfig = {
      dialogHeader: 'Delete Batch ' + key,
      confirmButtonLabel: 'Delete',
      dialogBody: 'Are you sure you want to delete?',
      danger: true
    };
    this.dialog.open(ConfirmComponent, {
      width: '30em',
      data: confirmInterface,
    }).afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.package.mapOccurrences.delete(key);
        this.sendNotification(NotificationType.WARNING, key + " Batch Deleted");
      }
    });
  }

  onMapKeyChange(value: string, index: string): void {
    let pack: PackageOccurence[] = this.package.mapOccurrences.get(index);
    //deleteing the previous key on the map
    this.package.mapOccurrences.delete(index);
    this.package.mapOccurrences.set(value, pack);
  }

  submitPackage() {
    console.log(this.package);
  }

  private sendNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }
}
