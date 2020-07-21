import { SIGN_OUT, SET_AUTHED_USER } from "../actions/authedUser";

export default function authUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    case SIGN_OUT:
      return null;
    default:
      return state;
  }
}
