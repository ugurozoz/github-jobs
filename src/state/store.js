import { createStore, applyMiddleware, compose  } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";



// Added for redux developer tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Modified for redux developer tools
//export const store = createStore(reducers, {}, applyMiddleware(thunk));
export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));


