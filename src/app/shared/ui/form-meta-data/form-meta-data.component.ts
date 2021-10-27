import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-form-meta-data',
  template: `
    <ng-container *ngIf="formDirective">
      <div class="container">
        FormGroupDirective Submitted ->
        <span
          [ngStyle]="{ color: formDirective?.submitted ? 'green' : 'red' }"
          >{{ formDirective?.submitted }}</span
        >
      </div>

      <div class="container">
        FormGroupDirective Valid ->
        <span [ngStyle]="{ color: formDirective?.valid ? 'green' : 'red' }">{{
          formDirective?.valid
        }}</span>
      </div>
    </ng-container>

    <ng-container *ngIf="form">
      <div class="container">
        FormGroup Valid ->
        <span [ngStyle]="{ color: form.valid ? 'green' : 'red' }">{{
          form?.valid
        }}</span>
      </div>
    </ng-container>

    <!-- Slot for individual control errors or whatever else you want -->
    <ng-container></ng-container>
  `,
  styles: [
    `
      .container {
        margin-bottom: 15px;
      }
    `,
  ],
})
export class FormMetaDataComponent implements OnChanges {
  @Input() form: FormGroup | null = null;

  @Input() formDirective: FormGroupDirective | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.formDirective) {
      console.log('changes: ', changes);
    }
  }
}
