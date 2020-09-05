import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import { map } from 'rxjs/operators';


type StorageApi = {
  jwt: string | null;
}

type StorageKey = keyof StorageApi;
type StorageValue = StorageApi[StorageKey];

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly storage: Storage;
  private storage$: BehaviorSubject<Storage>;

  constructor(private configuration: ConfigurationService) {
    const storageType = this.configuration.getItem('storage');
    this.storage = window[storageType];
    this.storage$ = new BehaviorSubject(this.storage);
  }

  public getItem$(key: StorageKey): Observable<StorageValue> {
    return this.storage$.pipe(
      map(storage => JSON.parse(storage.getItem(key)))
    );
  }

  public getItem(key: StorageKey): StorageValue {
    return JSON.parse(this.storage.getItem(key));
  }

  public setItem(key: StorageKey, value: StorageValue): void {
    this.storage.setItem(key, JSON.stringify(value));
    this.storage$.next(this.storage);
  }

  public removeItem(key: StorageKey): void {
    this.storage.removeItem(key);
    this.storage$.next(this.storage);
  }
}
