import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChildComponent } from './child.component';
import { FormComponent } from './form.component';
import { ParentComponent } from './parent.component';
import { ViewProviderRoutingModule } from './view-provider-routing.module';

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
})
export class ViewProviderModule {}
