import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'claiv-frame',
  template: '<ng-content></ng-content>',
  styles: [
    `claiv-frame {
      --n: 9;
      --d: 16;
      padding-bottom: calc(var(--n) / var(--d) * 100%);
      position: relative;
    }`,
    `claiv-frame > * {
      overflow: hidden;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }`,
    `claiv-frame > img, claiv-frame > video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class FrameComponent {}
