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
import { UiModule } from '../../shared/ui/ui.module';
import { ChildComponent } from './child.component';
import { FormComponent } from './form.component';
import { MarkAllAsTouchedRoutingModule } from './mark-all-as-touched-routing.module';
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
    MarkAllAsTouchedRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    UiModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance,
    },
  ],
})
export class MarkAllAsTouchedModule {}
