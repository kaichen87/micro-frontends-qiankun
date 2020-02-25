import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Record1Component } from './record1/record1.component';
import { Record2Component } from './record2/record2.component';


const routes: Routes = [
  { path: 'r1', component: Record1Component },
  { path: 'r2', component: Record2Component },
  { path: '', redirectTo: 'r1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordRoutingModule { }
