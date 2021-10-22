import {
  ChangeDetectorRef,
  Directive,
  OnDestroy,
  Optional,
  Self,
  SkipSelf,
} from '@angular/core';
import { FormGroupDirective as AngularFormGroupDirective } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[formGroup]',
})
export class FormGroupDirective implements OnDestroy {
  private unsubscribe = new Subject<void>();

  constructor(
    @Optional()
    @SkipSelf()
    private parentFormGroupDirective: AngularFormGroupDirective,
    @Self() private formGroupDirective: AngularFormGroupDirective,
    private cd: ChangeDetectorRef
  ) {
    console.log('parentFormGroupDirective: ', parentFormGroupDirective);
    console.log('myFormGroupDirective: ', formGroupDirective);
    // alert('what');

    if (parentFormGroupDirective) {
      parentFormGroupDirective.ngSubmit
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((event) => {
          formGroupDirective.onSubmit(event);
          this.cd.detectChanges();
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
