import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UiModule } from '../../shared/ui/ui.module';
import { ChildComponent } from './child.component';
import { CompositeCvaRoutingModule } from './composite-cva-routing.module';
import { CompositeCvaComponent } from './composite-cva.component';

@NgModule({
  declarations: [CompositeCvaComponent, ChildComponent],
  imports: [
    CommonModule,
    CompositeCvaRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    UiModule,
  ],
})
export class CompositeCvaModule {}
