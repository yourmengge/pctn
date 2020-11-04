import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorydealComponent } from './historydeal.component';

describe('HistorydealComponent', () => {
  let component: HistorydealComponent;
  let fixture: ComponentFixture<HistorydealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorydealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorydealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
