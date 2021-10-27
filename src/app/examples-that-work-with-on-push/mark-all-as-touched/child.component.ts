import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  template: `
    <fieldset>
      <legend>Child Component</legend>
      <div
        class="container"
        *ngIf="parentForm"
        [formGroup]="parentForm"
        #f="ngForm"
      >
        <mat-form-field>
          <mat-label>Child Level Input</mat-label>
          <input matInput formControlName="childFormControl" />
        </mat-form-field>

        <!-- Form Metadata -->
        <app-form-meta-data
          class="metadata"
          [form]="parentForm"
          [formDirective]="f"
        ></app-form-meta-data>
      </div>
    </fieldset>
  `,
  styles: [
    `
      .container {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input() parentForm?: FormGroup;

  constructor() {}
}
