import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck, shareReplay } from 'rxjs/operators';


export type Configuration = {
  storage: 'localStorage' | 'sessionStorage';
  gqlEndpoint: string;
}

type ConfigurationKey = keyof Configuration;
type ConfigurationValue = Configuration[ConfigurationKey];

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private static readonly CONFIGURATION_PATH = '/assets/configuration.json';

  private readonly configuration$: Observable<Configuration>;
  private configuration: Configuration;

  constructor(private http: HttpClient) {
    this.configuration$ = this.http
      .get<Configuration>(ConfigurationService.CONFIGURATION_PATH)
      .pipe(
        shareReplay(1)
      );
  }

  public fetchConfiguration(): Promise<Configuration> {
    return this.configuration$.toPromise().then(
      data => this.configuration = data
    );
  }

  public getItem$(key: ConfigurationKey): Observable<ConfigurationValue> {
    return this.configuration$.pipe(
      pluck(key)
    );
  }

  public getItem(key: ConfigurationKey): ConfigurationValue {
    return this.configuration[key];
  }
}
