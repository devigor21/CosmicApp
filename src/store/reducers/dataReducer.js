import {DataActionTypes} from '../actions/dataAction';

const initialState = {
  data: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA:
      return {...state, data: action.payload};

    default:
      return state;
  }
};
