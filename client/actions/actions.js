import * as types from '../constants/actionNames';
const axios = require('axios');

export const handleChange = (e, tochange) => ({
  type: types.HANDLE_CHANGE,
  tochange: tochange,
  payload: e.target.value,
});

export const handleLoginChange = (e, tochange) => ({
  type: types.HANDLE_LOGIN_CHANGE,
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
  e.preventDefault();
  axios.request({
    method: 'get',
    url: 'http://localhost:3000/userdata',
    data: {
      name: 'Frank',
    }
  })
    .then((data) => {
      console.log(data);
      return {
        type: types.HANDLE_LOGIN_SUBMIT,
        payload: 'h',
      }
    })
    .catch(() => {
      console.log('HIdata2');
      return {
        type: types.HANDLE_LOGIN_SUBMIT,
        payload: 'hi',
      }
    });
  return {
    type: types.HANDLE_LOGIN_SUBMIT,
    payload: 'h',
  }
};

// export const handleDashboardDisplay = (e) => ({
//   type: types.HANDLE_DASHBOARD_DISPLAY,
//   payload: e,
//   // query db and find out if they are a user
//   axios.request({
//     method: 'get',
//     url: 'http://localhost:3000/userdata',
//     data: {
//       name: '1',
//     }
//   })
//     .then((data) => {
//       return data.json();
//     })
// // if so, redirect to goals progress dashboard

// // otherwise, redirect to signup page and notify "you are not signed up", along w error

// return {
//     name: state.name,
//     password: state.name,
//   }
// });