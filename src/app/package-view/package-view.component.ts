import { Component, OnInit } from '@angular/core';
import { PackageOccurence } from '../model/package-occurence';
import { Packages } from '../model/packages';

@Component({
  selector: 'app-package-view',
  templateUrl: './package-view.component.html',
  styleUrls: ['./package-view.component.css']
})
export class PackageViewComponent implements OnInit {

  packages: Packages[] = [
    {
      packageId: "check",
      name: 'Class 6-8 All Subjects near Ultadanga',
      mapOccurrences: new Map([]),
      // mapOccurrences: {
      //   "batch": [] as PackageOccurence,
      //   // "batch2": []
      // },
      subjects: ["Science", "Mathematics", "Geography"],
      standards: ["Class 6", "Class 7", "Class 8", "Class 9"],
      weeklyCost: 300,
      totalWeekHours: 10,
      fixedCourse: false,
      visibility: true,
      anyoneCanAddBatch: true,
      refundable: false,
      active: true,
    } as Packages,
    {
      packageId: "awesome",
      name: 'JEE Mains near Ultadanga',
      // mapOccurrences: {
      //   "batch": [],
      //   // "batch2": []
      // },
      subjects: ["Science"],
      standards: ["JEE"],
      weeklyCost: 300,
      totalWeekHours: 10,
      fixedCourse: true,
      visibility: true,
      anyoneCanAddBatch: false,
      refundable: true,
      active: false
    } as Packages,
  ];

  constructor() { }

  ngOnInit(): void {
    // this.packages.pop().subjects.le
  }

  modifyPackage(id: string): void {
    alert(id);
  }

}
