import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { LoginActionTypes, LoginAction, LoginSuccessAction, LoginFaildAction } from '../actions/login.action';
import { LoginService } from '../../services/login';
import { of } from 'rxjs';


@Injectable()

export class LoginEffects {

  constructor(
    private actions$: Actions<any>,
    private loginService: LoginService,
  ) { }

  @Effect()
  getLetterOfCreditList$ = this.actions$.pipe(
    ofType(LoginActionTypes.Login),
    switchMap((action: LoginAction) => {
      const Login$ = this.loginService
        .signin(action.payload)
        .pipe(
          map(x => new LoginSuccessAction(x)),
          catchError(() => of(new LoginFaildAction()))
        );

      return Login$;
    })
  );
}

