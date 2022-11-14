import { combineReducers } from 'redux';
import authenticateUser from './authenticatedUser';
import questions from './questions';
import users from './users';

export default combineReducers({
    authenticateUser,
    questions,
    users
});