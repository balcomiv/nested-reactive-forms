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
import { InjectFormGroupDirectiveRoutingModule } from './inject-form-group-directive-routing.module';
import { ParentComponent } from './parent.component';
const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline',
  floatLabel: 'always',
};
@NgModule({
  declarations: [FormComponent, ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InjectFormGroupDirectiveRoutingModule,
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
export class InjectFormGroupDirectiveModule {}
