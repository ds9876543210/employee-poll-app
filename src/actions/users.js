import { saveQuestionAnswer } from "../utils/api";
import { addQuestionAnswer } from "./questions";

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const QUESTION_CREATED_BY_USER = 'QUESTION_CREATED_BY_USER';
export const ANSWER_SELECTED_BY_USER = 'ANSWER_SELECTED_BY_USER';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    };
}

export function questionCreatedByUser(id, author) {
    return {
        type: QUESTION_CREATED_BY_USER,
        id,
        author
    };
}

export function answerSelectedByUser(authenticatedUser, qid, answer) {
    return {
        type: ANSWER_SELECTED_BY_USER,
        authenticatedUser,
        qid,
        answer
    };
}

export function handleSaveQuestionAnswer(authenticatedUser, qid, answer) {
    return dispatch => {
        dispatch(answerSelectedByUser(authenticatedUser, qid, answer));
        dispatch(addQuestionAnswer(authenticatedUser, qid, answer));
        return saveQuestionAnswer(authenticatedUser, qid, answer).catch(
            e => {
                console.warn('Error while saving answer.');
            }
            );
    };
}