export const UserActionTypes = {
  SET_USER: 'SET_USER',
  CLEAR_USER: 'CLEAR_USER',
};

export const setUser = payload => ({
  type: UserActionTypes.SET_USER,
  payload,
});

export const clearUser = () => ({
  type: UserActionTypes.CLEAR_USER,
});
