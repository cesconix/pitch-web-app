export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function requestLogin(accessToken) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    accessToken
  };
}

function receiveLogin(token) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    token
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export function login(accessToken) {
  const config = {};

  return (dispatch) => {
    const token = 'mytoken';
    localStorage.setItem('token', token);
    dispatch(receiveLogin(token));
  };

  // return (dispatch) => {
  //   dispatch(requestLogin(accessToken));
  //   return fetch('http://localhost:3001/sessions/create', config)
  //     .then(response => response.json().then(user => ({ user, response })))
  //     .then(({ user, response }) => {
  //       if (!response.ok) {
  //         dispatch(loginError(user.message));
  //       } else {
  //         localStorage.setItem('token', user.token);
  //         dispatch(receiveLogin(user));
  //       }
  //     })
  //     .catch(error => dispatch(loginError(error.message)));
  // };
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('token');
    dispatch(receiveLogout());
  };
}
