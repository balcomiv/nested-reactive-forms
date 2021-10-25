import { Component, OnInit, Self } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NgControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-child',
  template: `
    <app-fieldset-wrapper title="Child Component">
      <!-- <mat-form-field *ngIf="parentFormGroup" [formGroup]="parentFormGroup"> -->
      <!-- <mat-form-field formGroupName="childFormGroup"> -->
      <mat-form-field [formGroup]="form">
        <mat-label>Child Level Input</mat-label>
        <input type="text" matInput formControlName="childFormControl" />
      </mat-form-field>
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
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit, ControlValueAccessor {
  form = new FormGroup({
    childFormControl: new FormControl('', Validators.required),
  });

  onTouched = (): void => {};

  //  NgControl => NgModel, FormControlDirective, FormControlName
  //  See images in assets 'ng-control-hierarchy'
  //  @Self in case somebody wraps your form control with their own form control. Don't want to grab theirs.
  constructor(@Self() public ngControl: NgControl) {
    //  It's our job to make sure NgControl is set up with the right valueAccessor and validators
    ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    //  It's our job to make sure NgControl is set up with the right valueAccessor and validators
    this.addValidators(this.ngControl.control);
  }

  private addValidators(control: AbstractControl | null): void {
    if (!control) {
      console.log(`${this.constructor.name}: No control`);
      return;
    }

    /*
    //  Example of how to compose validators already set, with more validators imposed by this component (like required)
    const validators = control?.validator
      ? [control.validator, Validators.required]
      : Validators.required;

    //  Set new validators and update the UI
    control.setValidators(validators);
    control.updateValueAndValidity();
    */
  }

  //#region ControlValueAccessor Implementation

  /**
   * Write value to view
   * @param value value to write
   */
  writeValue(val: any): void {
    //  Be careful if using 'patchValue' as it can introduce junk values
    // into the form
    //
    //  Don't emit as we don't want to mess up dirtiness logic, or make valueChanges
    // fire a wasteful round (see 'registerOnChange' below)
    val && this.form.setValue(val, { emitEvent: false });
  }

  /**
   * Save off callback to call on change
   * @description Our responsibility to know when to call it (see template input event)
   * @param fn Forms API function to call when the value changes in
   * the DOM
   */
  registerOnChange(fn: any): void {
    console.log('on change');
    this.form.valueChanges.subscribe(fn);
  }

  /**
   * Save off callback to call on touched
   * @description Our responsibility to know when to call it (see template onBlur event)
   * @param fn Forms API function to call when the control has been touched in
   * the DOM
   */
  registerOnTouched(fn: any): void {
    console.log('on blur');
    this.onTouched = fn;
  }

  /**
   * Enable/disable element in view
   */
  setDisabledState(disabled: boolean): void {
    disabled ? this.form.disable() : this.form.enable();
  }

  //#endregion
}
