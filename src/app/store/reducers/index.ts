import { loginReducer } from './login.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { listReducer } from './list.reducer';

export const reducers: ActionReducerMap<any> = {
  user: loginReducer,
  list: listReducer,
};
