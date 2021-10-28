/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', redirectTo: 'mark-all-as-touched', pathMatch: 'full' },
  // { path: '', redirectTo: 'view-provider', pathMatch: 'full' },
  // { path: '', redirectTo: 'inject-form-group-directive', pathMatch: 'full' },
  // { path: '', redirectTo: 'emitting-child-form-group', pathMatch: 'full' },
  // { path: '', redirectTo: 'composite-cva', pathMatch: 'full' },
  { path: '', redirectTo: 'pass-parent-form-down', pathMatch: 'full' },
  {
    path: 'mark-all-as-touched',
    loadChildren: () =>
      import(
        './examples-that-work-with-on-push/mark-all-as-touched/mark-all-as-touched.module'
      ).then((m) => m.MarkAllAsTouchedModule),
  },
  {
    path: 'view-provider',
    loadChildren: () =>
      import(
        './examples-that-work-with-on-push/view-provider/view-provider.module'
      ).then((m) => m.ViewProviderModule),
  },
  {
    path: 'inject-form-group-directive',
    loadChildren: () =>
      import(
        './examples-that-work-with-on-push/inject-form-group-directive/inject-form-group-directive.module'
      ).then((m) => m.InjectFormGroupDirectiveModule),
  },
  {
    path: 'emitting-child-form-group',
    loadChildren: () =>
      import(
        './examples-that-work-with-on-push/emitting-child-form-group/emitting-child-form-group.module'
      ).then((m) => m.EmittingChildFormGroupModule),
  },
  {
    path: 'composite-cva',
    loadChildren: () =>
      import(
        './examples-that-work-with-on-push/composite-cva/composite-cva.module'
      ).then((m) => m.CompositeCvaModule),
  },
  {
    path: 'pass-parent-form-down',
    loadChildren: () =>
      import(
        './examples-that-work-with-on-push/pass-parent-form-down/pass-parent-form-down.module'
      ).then((m) => m.PassParentFormDownModule),
  },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
