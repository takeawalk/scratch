import * as types from '../constants/actionNames';

const initialState = {
  userID: '',
  phone: '',
  password: '',
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_CHANGE: {
      return {
        userID: action.payload,
        phone: action.payload,
        password: action.payload,
      }
    }

    case types.HANDLE_SIGNUP_SUBMIT: {
      fetch('http://localhost:3000/newUser', { // TODO: update to correct route
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          userID: state.userID,
          phone: state.phone,
          password: state.password,
        })
      })
        .then((data) => {
          return data.json();

        })
      // console.log('hiii');
    }
    default:
      return state;
  }
};

export default signupReducer;
