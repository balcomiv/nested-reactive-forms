/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'mark-all-as-touched', pathMatch: 'full' },
  {
    path: 'mark-all-as-touched',
    loadChildren: () =>
      import(
        './examples-that-work/mark-all-as-touched/mark-all-as-touched.module'
      ).then((m) => m.MarkAllAsTouchedModule),
  },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
