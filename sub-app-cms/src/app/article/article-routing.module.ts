import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';


const routes: Routes = [
  { path: 'a1', component: Article1Component },
  { path: 'a2', component: Article2Component },
  { path: '', redirectTo: 'a1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
