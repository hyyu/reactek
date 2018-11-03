import { combineReducers } from 'redux';

const INITIAL_STATE = {
  emails: null,
};

const UsersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USERS_RECEIVER':
      // TODO: load users from action.data
      break;
    default:
      break;
  }
  return state;
};

export default combineReducers({
  user: UsersReducer,
});
