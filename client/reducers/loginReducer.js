import * as types from '../constants/actionNames';
const axios = require('axios');

const initialState = {
  name: '',
  password: '',
  sleep: null,
  excercise: null,

};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.HANDLE_LOGIN_CHANGE: {
      if (action.tochange === 'nameL') {
        return {
          ...state,
          name: action.payload
        }
      } else if (action.tochange === 'password') {
        return {
          ...state,
          password: action.payload
        }
      }
    }

    case types.HANDLE_LOGIN_SUBMIT: {
      return {
        ...state,
        sleep: action.payload.sleep,
        excercise: action.payload.exercise,
      }
    }
    default:
      return state;
  }
};

export default loginReducer;
