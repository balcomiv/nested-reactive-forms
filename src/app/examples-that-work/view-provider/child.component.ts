import { Component } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-child',
  template: `
    <fieldset>
      <legend>Child Component</legend>
      <mat-form-field>
        <mat-label>Child Level Input</mat-label>
        <input matInput formControlName="childFormControl" />
      </mat-form-field>
    </fieldset>
  `,
  styles: [],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class ChildComponent {}
