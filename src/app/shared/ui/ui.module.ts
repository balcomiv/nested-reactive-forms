import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FieldsetWrapperComponent } from './fieldset-wrapper.component';
import { FormMetaDataComponent } from './form-meta-data/form-meta-data.component';

@NgModule({
  declarations: [FieldsetWrapperComponent, FormMetaDataComponent],
  imports: [CommonModule],
  exports: [FieldsetWrapperComponent, FormMetaDataComponent],
})
export class UiModule {}
