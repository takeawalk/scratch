import { combineReducers, createStore } from 'redux';
import { signupReducer, loginReducer } from './signupReducer';

const combinedReducers = combineReducers({
  signupReducer: signupReducer,
  loginReducer: loginReducer,
});

const store = createStore(combinedReducers);

export default store;
