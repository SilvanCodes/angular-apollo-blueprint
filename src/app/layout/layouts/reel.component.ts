import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'claiv-reel',
  template: '<ng-content></ng-content>',
  styles: [
    `claiv-reel {
      --height: auto;
      --margin: var(--s0);
      /* --border: var(--s-5); */
      /* --padding: var(--s0); */
      display: flex;
      overflow-x: scroll;
      overflow-y: hidden;
      height: var(--height);
      /* padding: var(--padding); */
      /* border: var(--border) solid; */
    }`,
    `claiv-reel > * {
      flex: 0 0 auto;
    }`,
    `claiv-reel > * + * {
      margin-left: var(--margin);
    }`,
    `claiv-reel > img {
      height: 100%;
      flex-basis: auto;
      width: auto;
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class ReelComponent {}
