import { Spectator, createHostFactory } from '@ngneat/spectator/jest';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('AppComponent', () => {

  let spectator: Spectator<AppComponent>;
  const createComponent = createHostFactory({
    component:  AppComponent,
    mocks: [
      Router
    ],
    // in order to ignore non-stubbed router-outet
    schemas: [ NO_ERRORS_SCHEMA ]
  });

  beforeEach(() => spectator = createComponent('<app-root></app-root>'));

  it('should create the app', () => {
    const app = spectator.component;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'blueprint'`, () => {
    const app = spectator.component;
    expect(app.title).toEqual('blueprint');
  });

  it('should render title', () => {
    spectator.detectChanges();
    expect(spectator.query('.content span').textContent).toContain('blueprint app is running!');
  });
});
