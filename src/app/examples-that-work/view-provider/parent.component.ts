import { Component } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-parent',
  template: `
    <fieldset>
      <legend>Parent Component</legend>

      <mat-form-field>
        <mat-label>Parent Level Input</mat-label>
        <input matInput formControlName="parentFormControl" />
      </mat-form-field>

      <!-- Nested Child Component -->
      <app-child></app-child>
    </fieldset>
  `,
  styles: [],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class ParentComponent {}
