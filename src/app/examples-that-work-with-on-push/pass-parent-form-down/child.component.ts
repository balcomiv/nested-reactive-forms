import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-child',
  template: `
    <ng-container
      *ngIf="parentForm"
      [formGroup]="parentForm"
      #f="ngForm"
      appNestedSubForm
    >
      <app-fieldset-wrapper title="Child Component">
        <div class="container">
          <mat-form-field>
            <mat-label>Child Level Input</mat-label>
            <input type="text" matInput formControlName="childFormControl" />
          </mat-form-field>

          <!-- Form Metadata -->
          <app-form-meta-data
            class="metadata"
            [form]="parentForm"
            [formDirective]="f"
          ></app-form-meta-data>
        </div>

        <button type="button" mat-stroked-button (click)="(null)">
          Fire Change Detection
        </button>
      </app-fieldset-wrapper>
    </ng-container>
  `,
  styles: [
    `
      button {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  // @Input() parentForm?: FormGroup;
  parentForm: FormGroup | null = null;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit(): void {
    this.parentForm = this.formGroupDirective.control;
  }
}
