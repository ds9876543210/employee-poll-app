import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_QUESTION_ANSWER } from '../actions/questions';

export default function questions(state = {}, action) {
    if (action.type === RECEIVE_QUESTIONS) {
        return {
            ...state,
            ...action.questions
        };
    }
    else if (action.type === ADD_QUESTION) {
        const { question } = action;
        return {
            ...state,
            [question.id]: question
        };
    }
    else if (action.type === ADD_QUESTION_ANSWER) {
        const { authenticatedUser, qid, answer } = action;
        return {
            ...state,
            [qid]: {
                ...state[qid],
                [answer]: {
                    ...state[qid][answer],
                    votes: state[qid][answer].votes.concat(authenticatedUser)
                }
            }
        };
    }
    return state;
}