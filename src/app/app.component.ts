import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GlobalService} from './global/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gyangod';
  checked: Boolean = false;
  barIcon: Boolean = GlobalService.menuIcon;
  bottomNav: boolean ;
  constructor(private router: Router,private globalService:GlobalService) { }

  ngOnInit(): void {
    this.globalService.setBotttomNav(false);
    this.getBotttomNav();
  }
  // ngOnChanges(): void {}
  ngOnDestroy(): void {}

  getBotttomNav(): void{
    this.globalService.getBotttomNav().subscribe(botttom =>{
      this.bottomNav = botttom;
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
}
