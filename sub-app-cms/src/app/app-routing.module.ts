import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentComponent } from './document/document.component';


const routes: Routes = [
  {
    path: 'cms',
    children: [
      { path: '', redirectTo: 'book', pathMatch: 'full' },
      { path: 'article', loadChildren: () => import('./article/article.module').then(m => m.ArticleModule) },
      { path: 'book', loadChildren: () => import('./book/book.module').then(m => m.BookModule) },
    ]
  },
  {
    path: 'cms/document',
    component: DocumentComponent
  },
  {
    path: '',
    redirectTo: '/cms/document',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
