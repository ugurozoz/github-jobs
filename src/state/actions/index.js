import * as ActionType from '../action-types';
import axios from 'axios';

// Action Creators

export const fetchJobsStart = () => {
  return {
    type: ActionType.FETCH_JOBS_START,
  };
};

export const fetchJobsSuccess = (jobs) => {
  return {
    type: ActionType.FETCH_JOBS_SUCCESS,
    payload: jobs,
  };
};

export const fetchJobsFail = (error) => {
  return {
    type: ActionType.FETCH_JOBS_FAIL,
    error: error,
  };
};

export const fetchJobs = (srcParam) => {
  return (dispatch) => {
    dispatch(fetchJobsStart());
    //https://jobs.github.com
    const apiURL = '/positions.json';
    const searchParam = srcParam ? `?search=${srcParam}` : '';
    axios
      .get(`${apiURL}${searchParam}`, { crossdomain: true })
      .then((response) => {
        console.log("TAKEN GITHUB DATA",response.data)
        dispatch(fetchJobsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchJobsFail(error));
      });
  };
};

// type: ActionType.FETCH_JOBS,
//     srcParam: srcParam,
