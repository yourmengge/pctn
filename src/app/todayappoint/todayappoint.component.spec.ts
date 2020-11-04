import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayappointComponent } from './todayappoint.component';

describe('TodayappointComponent', () => {
  let component: TodayappointComponent;
  let fixture: ComponentFixture<TodayappointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayappointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
