import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';

// another way of looking at this root-reducer file is seeing this as "state" for whatever components are connected to the store
export default combineReducers({
  user: userReducer
});