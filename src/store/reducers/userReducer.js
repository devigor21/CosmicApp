import {UserActionTypes} from '../actions/userAction';

const initialState = {
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {...state, user: action.payload};

    case UserActionTypes.CLEAR_USER:
      return {...state, user: {}};

    default:
      return state;
  }
};
