import { createServiceFactory, SpectatorService, mockProvider } from '@ngneat/spectator/jest';
import { AuthenticationService } from './authentication.service';
import { StorageService } from './storage.service';
import { LoginGQL } from 'src/app/generated';
import { BehaviorSubject } from 'rxjs';


describe('AuthenticationService', () => {
  let spectator: SpectatorService<AuthenticationService>;

  const storage = { jwt: '' };

  const createService = createServiceFactory({
    service: AuthenticationService,
    providers: [
      mockProvider(LoginGQL, {
        mutate: ({ username, password }) => new BehaviorSubject({ data: { login: username + password } })
      }),
      mockProvider(StorageService, {
        setItem: (key, value) => {
          storage[key] = value;
        }
      })
    ]
  });

  beforeEach(() => spectator = createService());

  it('should set received jwt', () => {
    spectator.service.doLogin('user', 'pass');

    expect(storage.jwt).toEqual('userpass');
  });
});