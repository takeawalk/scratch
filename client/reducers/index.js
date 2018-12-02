import { combineReducers } from 'redux';

// import all reducers here
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  signup: signupReducer,
  login: loginReducer,
});

// make the combined reducers available for import
export default reducers;