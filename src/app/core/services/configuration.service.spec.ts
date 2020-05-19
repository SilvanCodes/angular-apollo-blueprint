import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator/jest';
import { ConfigurationService } from './configuration.service';
import { BehaviorSubject } from 'rxjs';


describe('ConfigurationService', () => {
  let spectator: SpectatorHttp<ConfigurationService>;
  const createHttp = createHttpFactory(ConfigurationService);

  beforeEach(() => spectator = createHttp());

  it('provides configuration', async () => {
    const configuration = spectator.service;

    const latestValue = new BehaviorSubject(null);
    configuration.getItem$('storage').subscribe(latestValue);

    // expect configuration to be missing
    expect(latestValue.getValue()).toEqual(null);

    configuration.fetchConfiguration();
    const request = spectator.expectOne('/assets/configuration.json', HttpMethod.GET);
    request.flush({ storage: 'localStorage' });

    // induce delay for observables to happen
    await new Promise(resolve => setTimeout(resolve, 0));

    // expect fetched configuration values
    expect(configuration.getItem('storage')).toEqual('localStorage');
    expect(latestValue.getValue()).toEqual('localStorage');
  })
});