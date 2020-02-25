import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Record2Component } from './record2.component';

describe('Record2Component', () => {
  let component: Record2Component;
  let fixture: ComponentFixture<Record2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Record2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Record2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
