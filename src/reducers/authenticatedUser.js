import { SET_AUTHENTICATED_USER } from "../actions/authenticateUser";

export default function authenticateUser(state = null, action) {
    if (action.type === SET_AUTHENTICATED_USER) {
        return action.id;
    }
    return state;
}