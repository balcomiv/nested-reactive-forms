import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fieldset-wrapper',
  template: `
    <fieldset>
      <legend *ngIf="title">{{ title }}</legend>
      <!-- Default -->
      <ng-content></ng-content>

      <!-- Nested Child Component -->
      <!-- <ng-content select="app-child"></ng-content> -->
    </fieldset>
  `,
  styles: [],
})
export class FieldsetWrapperComponent {
  @Input() title: string | null = null;
}
