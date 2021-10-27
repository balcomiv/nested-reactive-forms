import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  Optional,
  SkipSelf,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-parent',
  template: `
    <fieldset>
      <legend>Parent Component</legend>
      <ng-container *ngIf="parentForm" [formGroup]="parentForm" #f="ngForm">
        <div class="container">
          <mat-form-field>
            <mat-label>Parent Level Input</mat-label>
            <input matInput formControlName="parentFormControl" />
          </mat-form-field>

          <!-- Form Metadata -->
          <app-form-meta-data
            class="metadata"
            [form]="parentForm"
            [formDirective]="f"
          ></app-form-meta-data>
        </div>

        <app-child [parentForm]="parentForm"></app-child>
      </ng-container>
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
export class ParentComponent implements AfterViewInit {
  @Input() parentForm?: FormGroup;

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective | null =
    null;

  constructor(
    @Optional() @SkipSelf() public parentFormGroupDirective: FormGroupDirective,
    // @Self() public formGroupDirective: FormGroupDirective,
    private cd: ChangeDetectorRef
  ) {
    // formGroupDirective.ngSubmit.subscribe(() => {
    //   this.cd.markForCheck();
    // });
  }

  ngAfterViewInit(): void {
    if (this.parentFormGroupDirective) {
      this.parentFormGroupDirective.ngSubmit.subscribe((ev) => {
        // console.log('submitted parent form');

        if (this.formGroupDirective) {
          this.formGroupDirective.onSubmit(ev);
          this.cd.markForCheck();
        }
      });
    }
  }
}
