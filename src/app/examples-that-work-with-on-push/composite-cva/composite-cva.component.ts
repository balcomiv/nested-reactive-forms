import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-composite-cva',
  template: `
    <app-fieldset-wrapper title="Form Component">
      <form [formGroup]="form" (ngSubmit)="onSubmit()" #f="ngForm">
        <mat-form-field>
          <mat-label>Form Component</mat-label>
          <input type="text" matInput formControlName="formLevelFormControl" />
        </mat-form-field>

        <app-child formControlName="childFormControl"></app-child>

        <button mat-stroked-button type="submit">Submit Form</button>

        <p>Submitted:</p>
        <pre>{{ f.submitted | json }}</pre>

        <p>Form Valid:</p>
        <pre>{{ f.valid }}</pre>
        <pre>{{ form.valid }}</pre>

        <p>Child Form Control Error</p>
        <pre>{{ form.get('childFormControl')?.errors | json }}</pre>
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompositeCvaComponent {
  form = new FormGroup({
    formLevelFormControl: new FormControl('', Validators.required),
    childFormControl: new FormControl(''),
    // childFormGroup: new FormGroup({
    //   childFormControl: new FormControl('', Validators.required),
    // }),
  });

  constructor(private cd: ChangeDetectorRef) {}

  onSubmit(): void {
    console.log(`${this.constructor.name} - Submitted`);
    // this.form.markAllAsTouched();
    // this.cd.detectChanges();
  }
}
