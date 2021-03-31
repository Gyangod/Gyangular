import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherselectComponent } from './teacherselect.component';

describe('TeacherselectComponent', () => {
  let component: TeacherselectComponent;
  let fixture: ComponentFixture<TeacherselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
