import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book1Component } from './book1/book1.component';
import { Book2Component } from './book2/book2.component';
import { BookRoutingModule } from './book-routing.module';


@NgModule({
  declarations: [Book1Component, Book2Component],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
