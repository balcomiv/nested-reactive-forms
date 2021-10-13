import { Component, Input } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-parent',
  template: `
    <fieldset>
      <legend>Parent Component</legend>
      <!-- <ng-container *ngIf="parentForm" [formGroup]="parentForm"> -->
      <mat-form-field floatLabel="always" appearance="outline">
        <mat-label>Parent Level Input</mat-label>
        <input matInput formControlName="parentFormControl" />
      </mat-form-field>
      <app-child [parentForm]="parentForm"></app-child>
      <!-- </ng-container> -->
    </fieldset>

    <ng-container *ngIf="false && parentForm">
      <p>Form Value:</p>
      <pre>{{ parentForm.value | json }}</pre>

      <p>valid:</p>
      <div>{{ parentForm.valid }}</div>

      <!-- <p>Submitted:</p>
      <div>{{ formSubmitted }}</div> -->
    </ng-container>
  `,
  styles: [],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class ParentComponent {
  @Input() parentForm?: FormGroup;

  constructor() {}
}
