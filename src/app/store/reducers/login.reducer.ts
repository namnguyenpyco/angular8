import { LoginActionTypes, LoginActions } from '../actions/login.action';


export interface LoginState {
  email: string;
  loading: boolean;
}

export const initialState: LoginState = {
  email: null,
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
        email: action.payload.email
      };
    }

    case LoginActionTypes.Logout: {
      return {
        ...state,
        loading: false,
        email: null
      };
    }

    default:
      return state;

  }
}
