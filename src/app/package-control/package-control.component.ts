import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageOccurence } from '../model/package-occurence';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '/';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    if (this.router.url.toString().includes("update")) {
      console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    } else {
      //TEACH or LEARN
      console.log(this.activatedRoute.snapshot.paramMap.get('method'));
    }

  }

  addPackOccurence(){
    this.ELEMENT_DATA.set("",null);
  }

}
