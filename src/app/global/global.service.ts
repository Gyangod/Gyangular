import { Injectable } from '@angular/core';
import { Observable,of, Subject,from,asyncScheduler} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  static menuIcon: Subject<boolean> = new Subject<boolean>();
  static bottomNav: Subject<boolean> = new Subject<boolean>();
  // static bottomNav: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  public getBotttomNav(): Observable<boolean> {
    return GlobalService.bottomNav;
  }
  public setBotttomNav(newBottomNav: boolean): void{
    GlobalService.bottomNav.next(newBottomNav);
  }
  public getMenuIcon(): Observable<boolean> {
    return GlobalService.menuIcon;
  }
  public setMenuIcon(newMenuIcon: boolean): void {
    GlobalService.menuIcon.next(newMenuIcon);
  }
  
}
