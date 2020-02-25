import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';


const routes: Routes = [
  { path: 't1', component: Template1Component },
  { path: 't2', component: Template2Component },
  { path: '', redirectTo: 't1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
