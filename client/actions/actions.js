import * as types from '../constants/actionNames';

export const handleChange = (e) => ({
  type: types.HANDLE_CHANGE,
  payload: e.target.value,
});

export const handleSignupSubmit = (e) => ({
  type: types.HANDLE_SIGNUP_SUBMIT,
  payload: e
});

export const handleLoginSubmit = (e) => ({
  type: types.HANDLE_LOGIN_SUBMIT,
  payload: e
});
