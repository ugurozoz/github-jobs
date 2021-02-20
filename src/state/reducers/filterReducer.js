import * as ActionType from '../action-types/';

const initialState = {
  description: '',
  location: '',
  lat: null,
  long: null,
  full_time: false,
};

const setJobTypeFilter = (state, action) => {
  return { ...state, full_time: action.payload };
};

const setLocationFilter = (state, action) => {
  return { ...state, location: action.payload };
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_JOBTYPE_FILTER:
      return setJobTypeFilter(state, action);
    case ActionType.SET_LOCATION_FILTER:
      return setLocationFilter(state, action);
    default:
      return state;
  }
};

export default filterReducer;
