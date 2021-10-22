import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChildComponent } from './child.component';
import { EmittingChildFormGroupRoutingModule } from './emitting-child-form-group-routing.module';
import { FormComponent } from './form.component';
import { ParentComponent } from './parent.component';

@NgModule({
  declarations: [FormComponent, ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmittingChildFormGroupRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class EmittingChildFormGroupModule {}
