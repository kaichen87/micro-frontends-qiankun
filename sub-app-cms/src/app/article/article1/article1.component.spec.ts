import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Article1Component } from './article1.component';

describe('Article1Component', () => {
  let component: Article1Component;
  let fixture: ComponentFixture<Article1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
