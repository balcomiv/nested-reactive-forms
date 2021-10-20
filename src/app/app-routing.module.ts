/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', redirectTo: 'mark-all-as-touched', pathMatch: 'full' },
  // { path: '', redirectTo: 'view-provider', pathMatch: 'full' },
  { path: '', redirectTo: 'inject-form-group-directive', pathMatch: 'full' },
  {
    path: 'mark-all-as-touched',
    loadChildren: () =>
      import(
        './examples-that-work/mark-all-as-touched/mark-all-as-touched.module'
      ).then((m) => m.MarkAllAsTouchedModule),
  },
  {
    path: 'view-provider',
    loadChildren: () =>
      import('./examples-that-work/view-provider/view-provider.module').then(
        (m) => m.ViewProviderModule
      ),
  },
  {
    path: 'inject-form-group-directive',
    loadChildren: () =>
      import(
        './examples-that-work/inject-form-group-directive/inject-form-group-directive.module'
      ).then((m) => m.InjectFormGroupDirectiveModule),
  },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
