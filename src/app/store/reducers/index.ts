import { loginReducer } from './login.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const reducers: ActionReducerMap<any> = {
  user: loginReducer,
};
