import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";

const reducers = combineReducers({
  githubJobs: jobsReducer
});




export default reducers;