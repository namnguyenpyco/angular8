import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Login } from '../core/models/login-model';

@Injectable({
  providedIn: 'root',
})

export class ListService {

  private baseUrl = 'http://vue-node-mongo.herokuapp.com/';

  constructor(
    private httpClient: HttpClient
    ) { }

    public getListMobile() {
      const url = `${this.baseUrl}listuser`;
      return this
        .httpClient
        .get(url)
        .pipe(
          map(o => o),
          catchError(this.handleError)
        );
    }

  private handleError(err: any) {
    return throwError(err);
  }
}
