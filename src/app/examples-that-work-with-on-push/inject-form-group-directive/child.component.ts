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
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // viewProviders: [
  //   { provide: ControlContainer, useExisting: FormGroupDirective },
  // ],
})
export class ChildComponent {
  @Input() parentForm?: FormGroup;

  constructor() {}
}
