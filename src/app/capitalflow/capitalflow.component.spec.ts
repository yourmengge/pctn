import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalflowComponent } from './capitalflow.component';

describe('CapitalflowComponent', () => {
  let component: CapitalflowComponent;
  let fixture: ComponentFixture<CapitalflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
