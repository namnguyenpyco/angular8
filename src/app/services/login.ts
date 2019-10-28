import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Login } from '../core/models/login-model';

@Injectable({
  providedIn: 'root',
})

export class LoginService {

  private baseUrl = 'http://vue-node-mongo.herokuapp.com/';

  constructor(
    private httpClient: HttpClient
    ) { }

    public signin(login: Login): Observable<Login> {
      const url = `${this.baseUrl}login`
      return this
          .httpClient
          .post<Login>(url, login)
          .pipe(
              map(o => o),
              catchError(this.handleError)
          );
    }

    public signup(login: Login): Observable<Login> {
      const url = `${this.baseUrl}signup`
      return this
          .httpClient
          .post<Login>(url, login)
          .pipe(
              map(o => o),
              catchError(this.handleError)
          );
    }

  private handleError(err: any) {
    return throwError(err);
  }
}
