import { combineReducers, createStore } from 'redux';
import { signupReducer, loginReducer } from './signupReducer';
import reducers from './index';

// const combinedReducers = combineReducers({
//   signupReducer: signupReducer,
//   loginReducer: loginReducer,
// });

const store = createStore(reducers);

export default store;
