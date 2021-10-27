import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UiModule } from '../../shared/ui/ui.module';
import { ChildComponent } from './child.component';
import { FormComponent } from './form.component';
import { NestedSubFormDirective } from './nested-sub-form.directive';
import { PassParentFormDownRoutingModule } from './pass-parent-form-down-routing.module';

@NgModule({
  declarations: [FormComponent, ChildComponent, NestedSubFormDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PassParentFormDownRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    UiModule,
    // FormHelperModule,
  ],
})
export class PassParentFormDownModule {}
