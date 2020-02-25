import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';
import { ArticleRoutingModule } from './article-routing.module';



@NgModule({
  declarations: [Article1Component, Article2Component],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
