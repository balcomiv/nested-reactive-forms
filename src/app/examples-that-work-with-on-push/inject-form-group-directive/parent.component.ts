import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-parent',
  template: `
    <fieldset>
      <legend>Parent Component</legend>
      <ng-container *ngIf="parentForm" [formGroup]="parentForm">
        <mat-form-field floatLabel="always" appearance="outline">
          <mat-label>Parent Level Input</mat-label>
          <input matInput formControlName="parentFormControl" />
        </mat-form-field>
        <app-child [parentForm]="parentForm"></app-child>
      </ng-container>
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
})
export class ParentComponent implements OnInit {
  parentForm: FormGroup | null = null;

  //  private controlContainer: ControlContainer?
  constructor(private formGroupDirective: FormGroupDirective) {
    //  ** 'control' is not yet set on formGroup here **
    //  https://github.com/angular/angular/issues/23914
    //  this.parentForm = formGroup.control;
  }

  ngOnInit(): void {
    this.parentForm = this.formGroupDirective.control;
  }
}
