import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Book1Component } from './book1/book1.component';
import { Book2Component } from './book2/book2.component';


const routes: Routes = [
  { path: 'b1', component: Book1Component },
  { path: 'b2', component: Book2Component },
  { path: '', redirectTo: 'b1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
