import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'claiv-imposter',
  template: '<ng-content></ng-content>',
  styles: [
    `claiv-imposter {
      --positioning:  absolute;
      --margin: var(--s0);
      position: var(--positioning);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }`,
    `claiv-imposter > :first-child {
      overflow: auto;
      max-width: calc(100% - (var(--margin) * 2));
      max-height: calc(100% - (var(--margin) * 2));
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class ImposterComponent {}
