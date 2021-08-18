import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {GlobalService} from './global/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gyangod';
  checked: Boolean = false;
  barIcon: Boolean  = true;
  bottomPanel: boolean  = false;
  bottomSub: any;
  menuSub: any;
  constructor(private router: Router,private globalService:GlobalService,private _location:Location) {
    // this.intializeValues();
   }

  ngOnInit(): void {
    this.subscribeConstructions();
  }
  // ngOnChanges(): void {}
  ngOnDestroy(): void {
    this.bottomSub.unsubscribe();
    this.menuSub.unsubscribe();
  }

  // intializeValues(): void {
  //   this.globalService.setBotttomNav(false);
  //   this.globalService.setMenuIcon(true);
  // }

  subscribeConstructions(){
    this.bottomSub = this.globalService.getBotttomNav().subscribe(botttom =>{
      this.bottomPanel = botttom;
      // console.log(this.bottomPanel);
    });
    this.menuSub = this.globalService.getMenuIcon().subscribe(menuIcon =>{
      this.barIcon = menuIcon;
    });
  }
  clickLogin(drawer) {
    this.router.navigateByUrl('/login');
    drawer.toggle();
  }
  clickHome(drawer) {
    this.router.navigateByUrl('/home');
    drawer.toggle();
  }

  backMenuIcon() {
    this._location.back();
  }
}
