import { createServiceFactory, SpectatorService, mockProvider } from '@ngneat/spectator/jest';
import { StorageService } from './storage.service';
import { ConfigurationService } from './configuration.service';
import { BehaviorSubject } from 'rxjs';


describe('StorageService', () => {
  let spectator: SpectatorService<StorageService>;
  const createService = createServiceFactory({
    service: StorageService,
    providers: [
      mockProvider(ConfigurationService, {
        getItem: _ => 'localStorage'
      })
    ]
  });

  beforeEach(() => spectator = createService());

  afterEach(() => window.localStorage.clear())

  it('should set key to stringified value', () => {
    spectator.service.setItem('jwt', { username: 'test' });

    expect(window.localStorage.getItem('jwt')).toEqual(JSON.stringify({ username: 'test' }));
  });

  it('should propagate updates', () => {
    const storage = spectator.service;

    const latestValue = new BehaviorSubject(null);
    storage.getItem$('jwt').subscribe(latestValue);

    // should be empty
    expect(latestValue.getValue()).toEqual(null);
    expect(storage.getItem('jwt')).toEqual(null);

    storage.setItem('jwt', { username: 'foo' });

    // should have value
    expect(latestValue.getValue()).toEqual({ username: 'foo' });
    expect(storage.getItem('jwt')).toEqual({ username: 'foo' });

    storage.removeItem('jwt');

    // should be empty again
    expect(latestValue.getValue()).toEqual(null);
    expect(storage.getItem('jwt')).toEqual(null);
  })
});