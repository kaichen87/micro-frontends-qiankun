import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'sms',
    children: [
      { path: '', redirectTo: 'record', pathMatch: 'full' },
      { path: 'record', loadChildren: () => import('./record/record.module').then(m => m.RecordModule) },
      { path: 'template', loadChildren: () => import('./template/template.module').then(m => m.TemplateModule) },
    ]
  },
  {
    path: '',
    redirectTo: '/sms',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
