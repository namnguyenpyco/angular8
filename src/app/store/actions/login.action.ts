

import { Action } from '@ngrx/store';

export enum LoginActionTypes {
  Login      = '[Login] login an account',
  LoginSuccess     = '[login] login success',
  LoginFaild = '[login] login faild',
  Logout = '[login] logout',
}

export class LoginAction implements Action {
  readonly type = LoginActionTypes.Login;
  constructor(public payload: {name: string, password: string}) { }
}

export class LoginSuccessAction implements Action {
  readonly type = LoginActionTypes.LoginSuccess;
  constructor(public payload) { }
}

export class LoginFaildAction implements Action {
  readonly type = LoginActionTypes.LoginFaild;
  constructor() { }
}

export class LogoutAction implements Action {
  readonly type = LoginActionTypes.Logout;
  constructor() { }
}

export type LoginActions =
  | LoginAction
  | LoginSuccessAction
  | LoginFaildAction
  | LogoutAction
;
