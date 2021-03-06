import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UiModule } from '../../shared/ui/ui.module';
import { ChildComponent } from './child.component';
import { EmittingChildFormGroupRoutingModule } from './emitting-child-form-group-routing.module';
import { FormComponent } from './form.component';
import { NestedSubFormDirective } from './nested-sub-form.directive';

@NgModule({
  declarations: [FormComponent, ChildComponent, NestedSubFormDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmittingChildFormGroupRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    UiModule,
  ],
})
export class EmittingChildFormGroupModule {}
