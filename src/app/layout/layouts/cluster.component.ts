import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'claiv-cluster',
  template: '<div><ng-content></ng-content></div>',
  styles: [
    `claiv-cluster {
      --margin: var(--s0);
      --justify: flex-start;
      overflow: hidden;
    }`,
    `claiv-cluster > * {
      display: flex;
      flex-wrap: wrap;
      margin: calc(var(--margin) / 2 * -1);
      justify-content: var(--justify);
      align-items: center;
    }`,
    `claiv-cluster > * > * {
      margin: calc(var(--margin) / 2);
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class ClusterComponent {}
