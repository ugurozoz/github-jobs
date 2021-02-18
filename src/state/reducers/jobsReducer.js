import * as ActionType from '../action-types/';
import { updateObject } from '../../shared/utility';

const initialState = {
  loading: false,
  error: null,
  jobs: [],
};

const fetchJobsStart = (state) => {
  return { ...state, loading: true };
};

const fetchJobsFail = (state, action) => {
  return { ...state, loading: false, error: action.error };
};

const fetchJobsSuccess = (state, action) => {
  return { ...state, jobs:action.payload, loading: false, error:null };
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_JOBS_START:
      return fetchJobsStart(state, action);

    case ActionType.FETCH_JOBS_SUCCESS:
      return fetchJobsSuccess(state, action);

    case ActionType.FETCH_JOBS_FAIL:
      return fetchJobsFail(state, action);

    default:
      return state;
  }
};

export default jobsReducer;
