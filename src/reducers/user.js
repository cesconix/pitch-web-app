import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions';

const initialState = {
  profile: null,
  meta: null
};

function user(state = initialState, action) {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return Object.assign({}, state, action.user);
  case LOGOUT_SUCCESS:
    return Object.assign({}, state, initialState);
  default:
    return state;
  }
}

export default user;
