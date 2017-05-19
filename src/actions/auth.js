import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const requestLogin = accessToken => ({
  type: LOGIN_REQUEST,
  accessToken,
});

const receiveLogin = data => ({
  type: LOGIN_SUCCESS,
  user: data.user,
  token: data.token,
});

const loginError = errorMessage => ({
  type: LOGIN_FAILURE,
  errorMessage,
});

export const login = accessToken => (dispatch) => {
  dispatch(requestLogin(accessToken));
  axios
    .post('/api/auth/fblogin', { accessToken })
    .then((json) => { dispatch(receiveLogin(json.data)); })
    .catch((error) => { dispatch(loginError(error.message)); });
};

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const requestLogout = () => ({
  type: LOGOUT_REQUEST,
});

const receiveLogout = () => ({
  type: LOGOUT_SUCCESS,
});

export const logout = () => (dispatch) => {
  dispatch(requestLogout());
  dispatch(receiveLogout());
};
