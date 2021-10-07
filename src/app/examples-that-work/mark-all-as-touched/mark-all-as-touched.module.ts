import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkAllAsTouchedRoutingModule } from './mark-all-as-touched-routing.module';
import { MarkAllAsTouchedComponent } from './mark-all-as-touched.component';


@NgModule({
  declarations: [
    MarkAllAsTouchedComponent
  ],
  imports: [
    CommonModule,
    MarkAllAsTouchedRoutingModule
  ]
})
export class MarkAllAsTouchedModule { }
