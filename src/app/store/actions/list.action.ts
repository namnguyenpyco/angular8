

import { Action } from '@ngrx/store';

export enum ListActionTypes {
  GetList      = '[List] login an account',
  GetListSuccess     = '[List] login success',
  GetListFaild = '[List] login faild',
}

export class LoginAction implements Action {
  readonly type = ListActionTypes.GetList;
  constructor(public payload: {name: string, password: string}) { }
}

export class LoginSuccessAction implements Action {
  readonly type = ListActionTypes.GetListSuccess;
  constructor(public payload) { }
}

export class LoginFaildAction implements Action {
  readonly type = ListActionTypes.GetListFaild;
  constructor() { }
}

export type ListActions =
  | LoginAction
  | LoginSuccessAction
  | LoginFaildAction
;
