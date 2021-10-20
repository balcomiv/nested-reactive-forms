import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
    <fieldset>
      <legend>Form Component</legend>
      <form *ngIf="form" [formGroup]="form" (ngSubmit)="onSubmit()">
        <mat-form-field floatLabel="always" appearance="outline">
          <mat-label>Form Level Input</mat-label>
          <input matInput type="text" formControlName="formLevelFormControl" />
        </mat-form-field>

        <app-parent></app-parent>

        <button mat-stroked-button type="submit">Submit Form</button>
      </form>
    </fieldset>
  `,
  styles: [
    `
      /* mat-form-field {
        width: 300px;
        display: block;
      } */

      :host ::ng-deep fieldset {
        width: 500px;
        min-height: 200px;
        margin: auto;

        legend {
          background-color: #000;
          color: #fff;
          padding: 3px 6px;
          margin-bottom: 25px;
        }
      }

      button {
        margin-top: 25px;
      }
    `,
  ],
})
export class FormComponent {
  form = this.fb.group({
    formLevelFormControl: ['', Validators.required],
    parentFormControl: ['', Validators.required],
    childFormControl: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    this.form.markAllAsTouched();
  }
}
