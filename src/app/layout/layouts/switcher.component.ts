import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'claiv-switcher',
  template: "<div><ng-content></ng-content></div>",
  styles: [
    `claiv-switcher {
      --margin: var(--s0);
      --min-width: var(--measure);
    }`,
    `claiv-switcher > *{
      display: flex;
      flex-wrap: wrap;
      margin: calc(var(--margin) / 2 * -1);
    }`,
    `claiv-switcher > * > * {
      flex-grow: 1;
      flex-basis: calc((var(--min-width) - (100% - var(--margin))) * 999);
      margin: calc(var(--margin) / 2);
    }`,
    `claiv-switcher > * > :nth-child(2):nth-last-child(2) {
      flex-grow: 2;
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class SwitcherComponent {}