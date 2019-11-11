

import { Action } from '@ngrx/store';

export enum ListActionTypes {
  GetListUser      = '[List] get list user',
  GetListUserSuccess     = '[List] get list user success',
  GetListUserFaild = '[List] get list faild',
}

export class GetListUserAction implements Action {
  readonly type = ListActionTypes.GetListUser;
  constructor() { }
}

export class GetListUserSuccessAction implements Action {
  readonly type = ListActionTypes.GetListUserSuccess;
  constructor(public payload) { }
}

export class GetListUserFaildAction implements Action {
  readonly type = ListActionTypes.GetListUserFaild;
  constructor() { }
}

export type ListActions =
  | GetListUserAction
  | GetListUserSuccessAction
  | GetListUserFaildAction
;
