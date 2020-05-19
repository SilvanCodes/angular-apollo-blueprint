import { Injectable } from '@angular/core';
import { LoginGQL } from 'src/app/generated';
import { StorageService } from './storage.service';
import * as jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


type Jwt = {
  username: string;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private login: LoginGQL,
    private storage: StorageService
  ) { }

  public doLogin(username: string, password: string): void {
    this.login.mutate({ username, password }).subscribe(({ data: { login } }) => {
      this.storage.setItem('jwt', login);
    });
  }

  public jwt$(): Observable<Jwt> {
    return this.storage.getItem$('jwt').pipe(
      map<string, Jwt>(jwt => jwt ? jwtDecode(jwt) : null)
    );
  }

  public isAuthenticated$(): Observable<boolean> {
    return this.jwt$().pipe(
      map(jwt => jwt ? jwt.exp > Date.now() : false)
    );
  }
}
