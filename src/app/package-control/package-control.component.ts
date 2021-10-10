import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageOccurence } from '../model/package-occurence';
import { OccurenceComponent } from '../modal/occurence/occurence.component';
import { OccurenceConfig } from '../modal/occurence/occurence.config';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CustomAdapter, CustomDateParserFormatter } from '../global/global.datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ConfirmConfig } from '../modal/confirm/confirm.config';
import { ConfirmComponent } from '../modal/confirm/confirm.component';
import { NotificationService } from '../service/notification.service';
import { NotificationType } from '../enum/notification-type.enum';


@Component({
  selector: 'app-package-control',
  templateUrl: './package-control.component.html',
  styleUrls: ['./package-control.component.css'],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ]
})
export class PackageControlComponent implements OnInit {
  NEW_BATCH_NAME: string = "new Batch";

  ELEMENT_DATA: Map<string, PackageOccurence[]> = new Map([
    ["Batch1", [
      { fromTime: "5:00 AM", toTime: "7:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "SUN" },
      { fromTime: "5:00 AM", toTime: "7:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "MON" },
      { fromTime: "5:00 AM", toTime: "7:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "WED" },
      { fromTime: "5:00 AM", toTime: "7:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "FRI" },
    ]],
    ["Batch2", [
      { fromTime: "5:00 AM", toTime: "7:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "SAT" },
      { fromTime: "5:00 AM", toTime: "7:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "TUE" },
      { fromTime: "5:00 AM", toTime: "7:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "THR" },
    ]],
  ]);
  gradeVar = [{ name: "Primary", value: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"] },
  { name: "Secondary", value: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"] },
  { name: "Higher Secondary", value: ["Class 11", "Class 12", "Joint Entrance"] },
  { name: "Grads", value: ["GATE", "IES", "PSU"] },
  ];

  model: NgbDateStruct;
  @ViewChildren(MatTable) tables: QueryList<MatTable<PackageOccurence>>;

  displayedColumns: string[] = ['actions', 'from', 'to', 'day'];
  mapData = this.ELEMENT_DATA;
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
        this.ELEMENT_DATA.get(key).push(result);
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
    if (this.ELEMENT_DATA.has(this.NEW_BATCH_NAME)) {
      this.sendNotification(NotificationType.ERROR, "Please Change existing Batch name \"" + this.NEW_BATCH_NAME + "\" to add new");
      return;
    }
    this.ELEMENT_DATA.set(this.NEW_BATCH_NAME, []);
    this.sendNotification(NotificationType.SUCCESS, "New Batch added with name " + this.NEW_BATCH_NAME);
  }

  editOccurence(key: string, value: number): void {
    let dialogInterface: OccurenceConfig = {
      dialogHeader: 'Edit the Occuerence',
      confirmButtonLabel: 'Update',
      occuerence: this.ELEMENT_DATA.get(key)[value]
    };
    this.dialog.open(OccurenceComponent, {
      width: '30em',
      data: dialogInterface,
      disableClose: true,
    }).afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.ELEMENT_DATA.get(key)[value] = result;
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
        this.ELEMENT_DATA.get(key).splice(value, 1);
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
        this.ELEMENT_DATA.delete(key);
        this.sendNotification(NotificationType.WARNING, key + " Batch Deleted");
      }
    });
  }

  onMapKeyChange(value: string, index: string): void {
    let pack: PackageOccurence[] = this.ELEMENT_DATA.get(index);
    //deleteing the previous key on the map
    this.ELEMENT_DATA.delete(index);
    this.ELEMENT_DATA.set(value, pack);
  }

  private sendNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }
}
