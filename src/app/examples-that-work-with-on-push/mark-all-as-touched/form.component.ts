import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
    <fieldset>
      <legend>Form Component</legend>
      <form [formGroup]="form" (ngSubmit)="onSubmit()" #f="ngForm">
        <div class="container">
          <mat-form-field>
            <mat-label>Form Level Input</mat-label>
            <input
              matInput
              type="text"
              formControlName="formLevelFormControl"
            />
          </mat-form-field>

          <!-- Form Metadata -->
          <app-form-meta-data
            class="metadata"
            [form]="form"
            [formDirective]="f"
          ></app-form-meta-data>
        </div>

        <!-- Nested Component -->
        <app-parent [parentForm]="form"></app-parent>

        <!-- Form Submit -->
        <button mat-stroked-button type="submit">Submit Form</button>
      </form>
    </fieldset>
  `,
  styles: [
    `
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

      .container {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  form = this.fb.group({
    formLevelFormControl: ['', Validators.required],
    parentFormControl: ['', Validators.required],
    childFormControl: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    // this.form.markAllAsTouched();
  }
}
