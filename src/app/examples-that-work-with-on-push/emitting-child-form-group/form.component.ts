import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
    <app-fieldset-wrapper title="Form Component">
      <form [formGroup]="form" (ngSubmit)="onSubmit()" #f="ngForm">
        <div class="container">
          <mat-form-field>
            <mat-label>Form Component</mat-label>
            <input
              type="text"
              matInput
              formControlName="formLevelFormControl"
            />
          </mat-form-field>

          <!-- Form Metadata -->
          <app-form-meta-data
            class="metadata"
            [form]="form"
            [formDirective]="f"
          >
          </app-form-meta-data>
        </div>

        <!-- Child Component -->
        <app-child (childFormGroup)="updateChildFormGroup($event)"></app-child>

        <button mat-stroked-button type="submit">Submit Form</button>

        <!-- <p>Child Form Control Error</p>
        <pre>{{ form.get('childFormControl')?.errors | json }}</pre> -->
      </form>
    </app-fieldset-wrapper>
  `,
  styles: [
    `
      :host {
        display: block;
        margin-top: 50px;
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
    // childFormControl: ['', Validators.required],
    childFormGroup: this.fb.group({}), // Not the same as in the child component
  });

  constructor(private fb: FormBuilder) {}

  updateChildFormGroup(value: FormGroup): void {
    // const val = this.form.get('childFormGroup')
    this.form.controls.childFormGroup = value;
  }

  onSubmit(): void {
    // this.form.markAllAsTouched();
  }
}
