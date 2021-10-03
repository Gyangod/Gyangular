import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageOccurence } from '../model/package-occurence';
import { OccurenceComponent } from '../modal/occurence/occurence.component';
import { OccurenceConfig } from '../modal/occurence/occurence.config';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CustomAdapter, CustomDateParserFormatter } from '../global/global.datepicker';
import { MatDialog } from '@angular/material/dialog';


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

  ELEMENT_DATA: Map<string, PackageOccurence[]> = new Map([
    ["Batch1", [
      { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "SUN" },
      { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "MON" },
      { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "WED" },
      { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "FRI" },
    ]],
    ["Batch2", [
      { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "SAT" },
      { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "TUE" },
      { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "THR" },
    ]],
  ]);
  model: NgbDateStruct;

  displayedColumns: string[] = ['actions', 'from', 'to', 'day'];
  mapData = this.ELEMENT_DATA;
  courseEnabler: boolean = false;
  scheduleEnabler: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,public dialog: MatDialog) {
  }

  openModal() : void{
    const dialogInterface: OccurenceConfig = {
      dialogHeader: 'I am created by Reusable dialog',
      dialogContent: 'I am second dialog',
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Submit'
    };
    const dialogRef = this.dialog.open(OccurenceComponent, {
      width: '30em',
      data: dialogInterface,
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        console.log(result);
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

  addPackOccurence() {
    this.ELEMENT_DATA.set("please change", null);
  }

  editOccurence(key: string, value: number): void {
    console.log("Edit map at index: " + key + " value: " + value);
  }

  deleteOccurence(key: string, value: number): void {
    console.log("Delete map at index: " + key + " value: " + value);
  }

  addOccurence(key: string): void {
    console.log("key: " + key);
  }

  onMapKeyChange(value: string, index: string): void {
    let pack: PackageOccurence[] = this.ELEMENT_DATA.get(index);
    this.ELEMENT_DATA.delete(index);
    this.ELEMENT_DATA.set(value, pack);
    console.log(this.ELEMENT_DATA.keys());
  }
}
