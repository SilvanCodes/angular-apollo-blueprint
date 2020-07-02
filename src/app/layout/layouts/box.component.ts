import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'claiv-box',
  template: '<ng-content></ng-content>',
  styles: [
    `claiv-box {
      --padding: var(--s0);
      --border: var(--s-5);
      padding: var(--padding);
      border: var(--border) solid;
      }`,
    `claiv-box * {
      color: inherit
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class BoxComponent {}
