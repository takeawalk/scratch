import * as types from '../constants/actionNames';

export const handleChange = (e, tochange) => ({
  type: types.HANDLE_CHANGE,
  tochange: tochange,
  payload: e.target.value,
});

export const handleSignupSubmit = (e) => {
  e.preventDefault();
  return {
    type: types.HANDLE_SIGNUP_SUBMIT,
    payload: e
  }
};

export const handleLoginSubmit = (e) => ({
  type: types.HANDLE_LOGIN_SUBMIT,
  payload: e
});
