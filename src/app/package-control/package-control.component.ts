import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-package-control',
  templateUrl: './package-control.component.html',
  styleUrls: ['./package-control.component.css']
})
export class PackageControlComponent implements OnInit {

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
