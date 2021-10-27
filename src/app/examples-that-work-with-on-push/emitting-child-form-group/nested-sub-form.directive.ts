import {
  ChangeDetectorRef,
  Directive,
  OnDestroy,
  Optional,
  Self,
  SkipSelf,
} from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appNestedSubForm]',
})
export class NestedSubFormDirective implements OnDestroy {
  private unsubscribe = new Subject<void>();

  constructor(
    @Optional()
    @SkipSelf()
    private parentFormGroupDirective: FormGroupDirective,
    @Self() private formGroupDirective: FormGroupDirective,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    // alert('hey');
    console.log('parentFormGroupDirective: ', parentFormGroupDirective);
    console.log('myFormGroupDirective: ', formGroupDirective);

    if (parentFormGroupDirective) {
      parentFormGroupDirective.ngSubmit
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((event) => {
          formGroupDirective.onSubmit(event);
          this.changeDetectorRef.detectChanges();
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
