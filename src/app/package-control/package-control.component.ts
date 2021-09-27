import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageOccurence } from '../model/package-occurence';

const ELEMENT_DATA: PackageOccurence[] = [
  { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "SUN" },
  { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "MON" },
  { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "SUN" },
  { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "SUN" },
  { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "SUN" },
  { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "SUN" },
  { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "SUN" },
  { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "SUN" },
  { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "SUN" },
  { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "SUN" },
  { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "SUN" },
  { fromTime: "05:00 AM", toTime: "07:15 AM", timeDifferent: 2.33, isActive: true, repeatable: true, day: "SUN" }
];


@Component({
  selector: 'app-package-control',
  templateUrl: './package-control.component.html',
  styleUrls: ['./package-control.component.css']
})
export class PackageControlComponent implements OnInit {

  displayedColumns: string[] = ['actions', 'from', 'to', 'day'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.router.url.toString().includes("update")) {
      console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    } else {
      //TEACH or LEARN
      console.log(this.activatedRoute.snapshot.paramMap.get('method'));
    }

  }

}
