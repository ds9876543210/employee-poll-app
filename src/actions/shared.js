import { getInitialDataInfo } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialDataInfo() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialDataInfo().then(
            ({ users, questions }) => {
                console.log("here");
                console.log(users);
                console.log(questions);
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
            }
        );
    };
}