import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  template: `
    <fieldset>
      <legend>Child Component</legend>
      <ng-container [formGroup]="form">
        <mat-form-field>
          <mat-label>Child Level Input</mat-label>
          <input matInput formControlName="childFormControl" />
        </mat-form-field>
      </ng-container>
    </fieldset>
  `,
  styles: [],
})
export class ChildComponent {
  form = new FormGroup({
    childFormControl: new FormControl('', Validators.required),
  });
  constructor() {}
}
