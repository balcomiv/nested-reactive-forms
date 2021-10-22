import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatFormFieldDefaultOptions,
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChildComponent } from './child.component';
import { FormComponent } from './form.component';
import { ParentComponent } from './parent.component';
import { ViewProviderRoutingModule } from './view-provider-routing.module';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline',
  floatLabel: 'always',
};
@NgModule({
  declarations: [FormComponent, ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ViewProviderRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance,
    },
  ],
})
export class ViewProviderModule {}
