import { saveQuestion } from '../utils/api';
import { questionCreatedByUser } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    };
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    };
}

export function addQuestionAnswer(authenticatedUser, qid, answer) {
    return {
        type: ADD_QUESTION_ANSWER,
        authenticatedUser,
        qid,
        answer
    };
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
    return dispatch => {
        return saveQuestion({ optionOneText, optionTwoText, author }).then(
            question => {
                dispatch(addQuestion(question));
                dispatch(questionCreatedByUser(question));
            }
        );
    };
}