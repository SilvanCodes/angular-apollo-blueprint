import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'claiv-cover',
  template: "<ng-content></ng-content>",
  styles: [
    `claiv-cover {
      --padding: var(--s0);
      --margin: var(--s0);
      --min-height: 100%;
      display: flex;
      flex-direction: column;
      min-height: var(--min-height);
      padding: var(--padding);
    }`,
    `claiv-cover > * {
      margin-top: var(--margin);
      margin-bottom: var(--margin);
    }`,
    /* if just on child, it is main */
    `claiv-cover > :only-child {
      margin-top: auto;
      margin-bottom: auto;
    }`,
    /* if two childs, heading and main */
    `claiv-cover > :last-child:nth-child(2) {
      margin-top: auto;
      margin-bottom: auto;
    }`,
    `claiv-cover > :first-child:nth-last-child(2) {
      margin-top: 0;
    }`,
    /* if three childs, heading, main, footer */
    `claiv-cover > :nth-child(2):nth-last-child(2) {
      margin-top: auto;
      margin-bottom: auto;
    }`,
    `claiv-cover > :first-child:nth-last-child(3) {
      margin-top: 0;
    }`,
    `claiv-cover > :last-child::nth-child(3) {
      margin-bottom: 0;
    }`,
  ],
  encapsulation: ViewEncapsulation.None
})
export class CoverComponent {}
