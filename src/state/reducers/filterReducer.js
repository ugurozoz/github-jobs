import * as ActionType from '../action-types/';

const initialState = {
  description: '',
  location: 'Berlin',
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

const setSearchTermFilter = (state, action) => {
  return { ...state, description: action.payload };
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_JOBTYPE_FILTER:
      return setJobTypeFilter(state, action);
    case ActionType.SET_LOCATION_FILTER:
      return setLocationFilter(state, action);
    case ActionType.SET_SEARCHTERM_FILTER:
      return setSearchTermFilter(state, action);

    default:
      return state;
  }
};

export default filterReducer;
