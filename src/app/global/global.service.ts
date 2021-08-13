import { Injectable } from '@angular/core';
import { Observable,of, Subject,from,asyncScheduler} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public static menuIcon: Boolean  = true;
  static bottomNav: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  public getBotttomNav(): Observable<boolean>
  {
    return GlobalService.bottomNav;
  }

  public setBotttomNav(newBottomNav: boolean): void{
    GlobalService.bottomNav.next(newBottomNav);
  }
}
