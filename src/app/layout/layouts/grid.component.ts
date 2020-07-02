import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'claiv-grid',
  template: '<ng-content></ng-content>',
  styles: [
    `claiv-grid {
      --margin: var(--s0);
      --min-width: 10rem;
      display: grid;
      grid-gap: 1rem;
    }`,
    `claiv-grid {
      grid-template-columns: repeat(auto-fit, minmax(min(var(--min-width), 100%), 1fr));
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent {}
