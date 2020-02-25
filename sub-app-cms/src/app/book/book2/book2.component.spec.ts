import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Book2Component } from './book2.component';

describe('Book2Component', () => {
  let component: Book2Component;
  let fixture: ComponentFixture<Book2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Book2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Book2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
