import { InjectionToken } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NotifierService,ɵa } from 'angular-notifier';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NotifierService,
        ɵa,
        {provide: InjectionToken, useClass: ɵa}
      ]
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
