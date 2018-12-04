import * as types from '../constants/actionNames';

const initialState = {
  name: '',
  phone: '',
  password: '',
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_CHANGE: {
      if (action.tochange === 'phone') {
        return {
          ...state,
          phone: action.payload
        }
      } else if (action.tochange === 'name') {
        return {
          ...state,
          name: action.payload
        }
      }
      return {
        ...state,
        password: action.payload,
      }
    }

    case types.HANDLE_SIGNUP_SUBMIT: {
      return state;
    }
    default:
      return state;
  }
};

export default signupReducer;
