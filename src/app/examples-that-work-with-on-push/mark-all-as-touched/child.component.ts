import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  template: `
    <fieldset>
      <legend>Child Component</legend>
      <ng-container *ngIf="parentForm" [formGroup]="parentForm">
        <mat-form-field>
          <mat-label>Child Level Input</mat-label>
          <input matInput formControlName="childFormControl" />
        </mat-form-field>
      </ng-container>
    </fieldset>

    <!-- <p>Form Value:</p>
    <pre>{{ form.value | json }}</pre>

    <p>valid:</p>
    <div>{{ form.valid }}</div>

    <p>FormGroupDirective</p>

    <p>Value:</p>
    <pre>{{ formGroupDirective.value | json }}</pre>

    <p>Submitted:</p>
    <div>{{ formGroupDirective.submitted }}</div> -->
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input() parentForm?: FormGroup;

  constructor() {}
}
