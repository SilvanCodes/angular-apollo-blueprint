import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'claiv-sidebar',
  template: "<ng-content></ng-content>",
  styles: [
    `claiv-sidebar {
      --sidebar-width: initial;
      --content-width: 50%;
    }`,
    `claiv-sidebar {
      display: flex;
      flex-wrap: wrap;
    }`,
    `claiv-sidebar > :first-child {
      flex-basis: var(--sidebar-width);
      flex-grow: 1;
    }`,
    `claiv-sidebar > :last-child {
      flex-basis: 0;
      flex-grow: 999;
      min-width: var(--content-width);
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {}
