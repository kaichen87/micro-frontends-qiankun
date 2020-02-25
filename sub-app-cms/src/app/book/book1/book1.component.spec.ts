import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Book1Component } from './book1.component';

describe('Book1Component', () => {
  let component: Book1Component;
  let fixture: ComponentFixture<Book1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Book1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Book1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
