import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gyangod';
  checked: Boolean = false;

  constructor(private router: Router) { }

  clickLogin(drawer) {
    this.router.navigateByUrl('/login');
    drawer.toggle();
  }
}
