import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkAllAsTouchedComponent } from './mark-all-as-touched.component';

const routes: Routes = [{ path: '', component: MarkAllAsTouchedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarkAllAsTouchedRoutingModule { }
