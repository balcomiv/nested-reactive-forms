import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

        <!-- Nested Child -->
        <app-child></app-child>
      </ng-container>
    </fieldset>
  `,
  styles: [],
})
export class ParentComponent implements OnInit {
  parentForm: FormGroup | null = null;

  ngOnInit(): void {
    this.parentForm = new FormGroup({
      parentFormControl: new FormControl('', Validators.required),
    });
  }
}
