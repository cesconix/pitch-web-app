import {
  LOGIN_REQUEST, LOGIN_SUCCESS,
  LOGIN_FAILURE, LOGOUT_SUCCESS
} from '../actions';

const authInitialState = {
  isFetching: false,
  isAuthenticated: !!localStorage.getItem('token')
};

function auth(state = authInitialState, action) {
  switch (action.type) {
  case LOGIN_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      isAuthenticated: false
    });
  case LOGIN_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      isAuthenticated: true,
      errorMessage: ''
    });
  case LOGIN_FAILURE:
    return Object.assign({}, state, {
      isFetching: false,
      isAuthenticated: false,
      errorMessage: action.message
    });
  case LOGOUT_SUCCESS:
    return Object.assign({}, state, {
      isFetching: true,
      isAuthenticated: false
    });
  default:
    return state;
  }
}

export default auth;
