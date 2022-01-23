export const DataActionTypes = {
  FETCH_DATA: 'FETCH_DATA',
  SET_DATA: 'SET_DATA',
};

export const fetchData = payload => ({
  type: DataActionTypes.FETCH_DATA,
  payload,
});

export const setData = () => ({type: DataActionTypes.SET_DATA});
