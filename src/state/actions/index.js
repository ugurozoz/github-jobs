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
    let paramString = ``;
    if (srcParam) {
      for (let key of Object.keys(srcParam)) {
        console.log(key, srcParam[key]);
        if (srcParam[key]) {
          paramString += `${key}=${srcParam[key]}&`;
        }
      }
      // Remove last ampersand
      let paramArray = paramString.split('').slice(0, -1);
      paramString = paramArray.join('');
    }

    let apiURL = 'http://githubjobs.trmov.com/';
    let searchParam = paramString
      ? `https://jobs.github.com/positions.json?${paramString}`
      : 'https://jobs.github.com/positions.json';

    // console.log(`>>> ${apiURL} --> ${searchParam} --> ${typeof srcParam} `)

    axios
      .get(`${apiURL}${searchParam}`)
      .then((response) => {
        dispatch(fetchJobsSuccess(response.data));
      })
      .catch((error) => {
        apiURL = 'https://cors-anywhere.herokuapp.com/';
        axios
          .get(`${apiURL}${searchParam}`)
          .then((response) => {
            dispatch(fetchJobsSuccess(response.data));
          })
          .catch((error) => {
            dispatch(fetchJobsFail(error));
          });
      });
  };
};

export const setJobTypeFilter = (value) => {
  return {
    type: ActionType.SET_JOBTYPE_FILTER,
    payload: value,
  };
};

export const setLocationFilter = (value) => {
  return {
    type: ActionType.SET_LOCATION_FILTER,
    payload: value,
  };
};

export const setSearchTermFilter = (value) => {
  return {
    type: ActionType.SET_SEARCHTERM_FILTER,
    payload: value,
  };
};
