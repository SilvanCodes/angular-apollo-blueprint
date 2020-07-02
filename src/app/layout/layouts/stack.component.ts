import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'claiv-stack',
  template: "<ng-content></ng-content>",
  styles: [
    `claiv-stack {
      --margin: var(--s0);
      --split: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }`,
    `claiv-stack > :first-child:nth-last-child(2) {
      margin-bottom: var(--split, auto);
    }`,
    `claiv-stack > * + * {
      margin-top: var(--margin);
    }`,
    `claiv-stack:only-child {
      height: 100%;
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class StackComponent {}
