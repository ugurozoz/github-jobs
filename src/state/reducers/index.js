import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';
import filterReducer from './filterReducer';

const reducers = combineReducers({
  githubJobs: jobsReducer,
  filters: filterReducer
});

export default reducers;
