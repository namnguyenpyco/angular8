import { LoginActionTypes, LoginActions } from '../actions/login.action';
import { ListActions, ListActionTypes } from '../actions/list.action';


export interface ListState {
  list: any[];
  loading: boolean;
}

export const initialState: ListState = {
  list: null,
  loading: true,
};

export function listReducer(
  state = initialState,
  action: ListActions
): ListState {

  switch (action.type) {
    case ListActionTypes.GetListUser: {
      return {
        ...state,
        loading: true,
      };
    }

    case ListActionTypes.GetListUserSuccess: {
      return {
        ...state,
        loading: false,
        list: action.payload
      };
    }

    case ListActionTypes.GetListUserFaild: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
