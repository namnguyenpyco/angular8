import { UserInfo } from './../../core/models/user-model';
import { LoginActionTypes, LoginActions } from '../actions/login.action';


export interface LoginState {
  user: UserInfo;
  loading: boolean;
}

export const initialState: LoginState = {
  user: null,
  loading: false,
};

export function loginReducer(
  state = initialState,
  action: LoginActions
): LoginState {

  switch (action.type) {
    case LoginActionTypes.Login: {
      return {
        ...state,
        loading: true,
      };
    }

    case LoginActionTypes.LoginSuccess: {
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    }

    case LoginActionTypes.Logout: {
      return {
        ...state,
        user: null
      };
    }

    default:
      return state;
  }
}
