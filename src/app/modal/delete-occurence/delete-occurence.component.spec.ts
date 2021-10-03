import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOccurenceComponent } from './delete-occurence.component';

describe('DeleteOccurenceComponent', () => {
  let component: DeleteOccurenceComponent;
  let fixture: ComponentFixture<DeleteOccurenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteOccurenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOccurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
