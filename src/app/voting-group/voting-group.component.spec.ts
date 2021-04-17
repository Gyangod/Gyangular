import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingGroupComponent } from './voting-group.component';

describe('VotingGroupComponent', () => {
  let component: VotingGroupComponent;
  let fixture: ComponentFixture<VotingGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
