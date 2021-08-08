import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public static menuIcon: Boolean  = true;
  constructor() { }
}
