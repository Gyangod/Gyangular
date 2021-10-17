import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
import { Subscription } from 'rxjs';
import { PackagesService } from '../service/packages.service'
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CustomHttpRespone } from '../model/custom-http-response';


@Component({
  selector: 'app-package-control',
  templateUrl: './package-control.component.html',
  styleUrls: ['./package-control.component.css'],
  providers: [
    // { provide: NgbDateAdapter, useClass: CustomAdapter },
    // { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ]
})
export class PackageControlComponent implements OnInit, OnDestroy {

  batchMap: Map<string,PackageOccurence[]> = new Map([]);
  NEW_BATCH_NAME: string = "new Batch";
  package: Packages = {
    visibility: true,
    active: true,
    refundable: true,
    fixedCourse: false,
    anyoneCanAddBatch: false,
    mapOccurrences: {},
    subjects: [],
    standards: []
  } as Packages;
  gradeVar = [{ name: "Primary", value: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"] },
  { name: "Secondary", value: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"] },
  { name: "Higher Secondary", value: ["Class 11", "Class 12", "Joint Entrance"] },
  { name: "Grads", value: ["GATE", "IES", "PSU"] },
  ];
  private subscriptions: Subscription[] = [];
  @ViewChildren(MatTable) tables: QueryList<MatTable<PackageOccurence>>;
  displayedColumns: string[] = ['actions', 'from', 'to', 'day'];
  courseEnabler: boolean = false;
  serviceCaller: string;
  showLoading: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private packagesService: PackagesService,
    public dialog: MatDialog, private notificationService: NotificationService) {
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
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
        this.batchMap.get(key).push(result);
        this.tables.forEach(ele => ele.renderRows());
        this.sendNotification(NotificationType.SUCCESS, "Occurence Added Successfully in " + key);
      }
    });
  }

  ngOnInit(): void {
    if (this.router.url.toString().includes("update")) {
      this.package.packageId = this.activatedRoute.snapshot.paramMap.get('id');
      //todo: GET call from backend to the package object
      this.serviceCaller = "U";
    } else {
      //TEACH or LEARN
      if (this.activatedRoute.snapshot.paramMap.get('method') == "teach") {
        this.serviceCaller = "T";
      }
      else {
        this.serviceCaller = "L";
      }
    }
  }

  addPackOccurence(): void {
    if (this.batchMap.has(this.NEW_BATCH_NAME)) {
      this.sendNotification(NotificationType.ERROR, "Please Change existing Batch name \"" + this.NEW_BATCH_NAME + "\" to add new");
      return;
    }
    this.batchMap.set(this.NEW_BATCH_NAME, []);
    this.sendNotification(NotificationType.SUCCESS, "New Batch added with name " + this.NEW_BATCH_NAME);
  }

  editOccurence(key: string, value: number): void {
    let dialogInterface: OccurenceConfig = {
      dialogHeader: 'Edit the Occuerence',
      confirmButtonLabel: 'Update',
      occuerence: this.batchMap.get(key)[value]
    };
    this.dialog.open(OccurenceComponent, {
      width: '30em',
      data: dialogInterface,
      disableClose: true,
    }).afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.batchMap.get(key)[value] = result;
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
        this.batchMap.get(key).splice(value, 1);
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
        this.batchMap.delete(key);
        this.sendNotification(NotificationType.WARNING, key + " Batch Deleted");
      }
    });
  }

  onMapKeyChange(value: string, index: string): void {
    let pack: PackageOccurence[] = this.batchMap.get(index);
    //deleteing the previous key on the map
    this.batchMap.delete(index);
    this.batchMap.set(value, pack);
  }

  submitPackage() {
    if (this.validateSubmit()) {
      this.showLoading = true;
      this.batchMap.forEach((value: PackageOccurence[], key: string) => {
        this.package.mapOccurrences[key] = value;
      });
      if (this.serviceCaller == "T") {
        this.subscriptions.push(
          this.packagesService.teachPackage(this.package).subscribe({
            next: (response: CustomHttpRespone) => {
              this.router.navigateByUrl('/home/pack/success');
              this.showLoading = false;
            },
            error: (errorResponse: HttpErrorResponse) => {
              this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
              this.showLoading = false;
            }
          })
        );
      } else if (this.serviceCaller == "L") {
        this.subscriptions.push(
          this.packagesService.savePackage(this.package).subscribe({
            next: (response: CustomHttpRespone) => {
              this.router.navigateByUrl('/home/pack/success');
              this.showLoading = false;
            },
            error: (errorResponse: HttpErrorResponse) => {
              this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
              this.showLoading = false;
            }
          })
        );
      } else if (this.serviceCaller == "U") {
        //TODO: make changes for update
      }
      else {
        this.sendNotification(NotificationType.ERROR, "Something is fishy!");
        this.router.navigateByUrl('/home');
      }
    }
    console.log(this.package);
  }

  validateSubmit(): boolean {
    if (this.package.subjects.length == 0) {
      this.sendNotification(NotificationType.WARNING, "Please Select atleast one Subject");
      return false;
    }
    if (this.package.standards.length == 0) {
      this.sendNotification(NotificationType.WARNING, "Please Select atleast one Grade");
      return false;
    }
    return true;
  }

  private sendNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }
}
