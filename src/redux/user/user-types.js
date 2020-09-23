// storing actions in an object like this allows it to be used in more than one place
// AND this helps prevent bugs since the action type is being typed right here (instead of multiple places)
// e.g. SET_CURRENT_USER is used in user-action.js and user-reducer.js
export const UserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}