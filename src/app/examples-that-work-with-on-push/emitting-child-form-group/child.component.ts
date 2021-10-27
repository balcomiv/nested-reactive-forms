import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  template: `
    <app-fieldset-wrapper title="Child Component">
      <div class="container">
        <mat-form-field appNestedSubForm [formGroup]="form" #f="ngForm">
          <mat-label>Child Level Input</mat-label>
          <input type="text" matInput formControlName="nestedFormControl" />
        </mat-form-field>
        <!-- Form Metadata -->
        <app-form-meta-data
          class="metadata"
          [form]="form"
          [formDirective]="f"
        ></app-form-meta-data>
      </div>

      <button type="button" mat-stroked-button (click)="(null)">
        Fire Change Detection
      </button>
    </app-fieldset-wrapper>
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
  private destroyed = new Subject<void>();

  form = new FormGroup({
    nestedFormControl: new FormControl('', Validators.required),
  });

  @Output() childFormGroup = new EventEmitter<FormGroup>();

  constructor() {} // private cd: ChangeDetectorRef // private formGroupDirective: FormGroupDirective,

  ngOnInit(): void {
    this.childFormGroup.emit(this.form);

    // this.formGroupDirective.ngSubmit
    //   .pipe(takeUntil(this.destroyed))
    //   .subscribe(() => {
    //     this.form.markAllAsTouched();
    //     this.cd.markForCheck();
    //   });
  }

  /** The form control validator for the date filter. */
  customValidator(control: AbstractControl): ValidationErrors | null {
    const error = true; // You would do your custom validation here
    return error ? { lcsDatepickerFilter: true } : null;
  }
}
