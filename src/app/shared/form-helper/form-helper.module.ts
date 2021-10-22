import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormGroupDirective } from './form-group.directive';

@NgModule({
  declarations: [FormGroupDirective],
  imports: [CommonModule],
  exports: [FormGroupDirective],
})
export class FormHelperModule {}
