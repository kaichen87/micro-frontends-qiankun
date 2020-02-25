import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Record1Component } from './record1.component';

describe('Record1Component', () => {
  let component: Record1Component;
  let fixture: ComponentFixture<Record1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Record1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Record1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
