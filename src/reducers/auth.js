import {
  LOGIN_REQUEST, LOGIN_SUCCESS,
  LOGIN_FAILURE, LOGOUT_SUCCESS,
} from '../actions';

const authInitialState = {
  isFetching: false,
  isAuthenticated: false,
  token: null,
  errorMessage: null,
};

function auth(state = authInitialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        token: null,
        errorMessage: null,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
        errorMessage: null,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        token: null,
        errorMessage: action.errorMessage,
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        token: null,
        errorMessage: null,
      });
    default:
      return state;
  }
}

export default auth;
