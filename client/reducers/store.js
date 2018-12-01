import { combineReducers, createStore } from 'redux';
import goalReducer from './goalReducer';

const combinedReducers = combineReducers({ goalReducer });
const store = createStore(combinedReducers);

export default store;
