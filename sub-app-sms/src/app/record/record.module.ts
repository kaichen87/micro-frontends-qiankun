import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Record1Component } from './record1/record1.component';
import { Record2Component } from './record2/record2.component';
import { RecordRoutingModule } from './record-routing.module';



@NgModule({
  declarations: [Record1Component, Record2Component],
  imports: [
    CommonModule,
    RecordRoutingModule
  ]
})
export class RecordModule { }
