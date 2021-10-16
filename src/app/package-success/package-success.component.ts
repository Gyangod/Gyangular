import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomHttpRespone } from '../model/custom-http-response';
import { PackagesService } from '../service/packages.service';

@Component({
  selector: 'app-package-success',
  templateUrl: './package-success.component.html',
  styleUrls: ['./package-success.component.css']
})
export class PackageSuccessComponent implements OnInit, OnDestroy {

  private response: CustomHttpRespone;

  constructor(private router: Router,private packagesService: PackagesService) { }
  ngOnDestroy(): void {
    this.packagesService.deleteResponseFromLocalCache();
  }

  ngOnInit(): void {
    this.response = this.packagesService.loadResponseFromLocalCache();
    if(this.response == null) {
      this.router.navigateByUrl('/home');
    }
  }

}
