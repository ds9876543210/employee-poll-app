import { RECEIVE_USERS, QUESTION_CREATED_BY_USER, ANSWER_SELECTED_BY_USER } from '../actions/users';

export default function users(state = {}, action) {
    if (action.type === RECEIVE_USERS) {
        return {
            ...state,
            ...action.users
        };
    }
    else if (action.type === QUESTION_CREATED_BY_USER) {
        const { id, author } = action;
        return {
            ...state,
            [author]: {
                ...state[author],
                questions: state[author].questions.concat(id)
            }
        };
    }
    else if (action.type === ANSWER_SELECTED_BY_USER) {
        const { authenticatedUser, qid, answer } = action;
        return {
            ...state,
            [authenticatedUser]: {
                ...state[authenticatedUser],
                answers: {
                    ...state[authenticatedUser].answers,
                    [qid]: answer
                }
            }
        };
    }
    return state;
}