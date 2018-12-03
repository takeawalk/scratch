import * as types from '../constants/actionNames';

export const handleChange = (e, tochange) => ({
  type: types.HANDLE_CHANGE,
  tochange: tochange,
  payload: e.target.value,
});

export const handleSignupSubmit = (e, name, phone, password) => {
  e.preventDefault();
  fetch('http://localhost:3000/newUser', { // TODO: update to correct route
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
      name: name,
      phone: phone,
      password: password,
    })
  })
    .catch(err => console.log(err));
  return {
    type: types.HANDLE_SIGNUP_SUBMIT,
    payload: e
  }
};

export const handleLoginSubmit = (e) => {
  axios.request({
    method: 'get',
    url: 'http://localhost:3000/userdata',
    data: {
      name: '1',
    }
  })
    .then((data) => {
      return data.json();
    })
  return ({
    type: types.HANDLE_LOGIN_SUBMIT,
    payload: e
  });
};
