import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { handleSaveQuestionAnswer } from '../actions/users';
import { Card, Feed, Button } from "semantic-ui-react";

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const history = useNavigate();
        return <Component history={history} {...props} />;
    };
    return Wrapper;
};

class Question extends Component {
    state = {
        selected: ""
    };

    optionHandler = (value) => {
        this.setState(() => ({
            selected: value
        }));
    };

    submitHandler = (e) => {
        e.preventDefault();
        const { selected } = this.state;
        const { dispatch, id } = this.props;

        dispatch(handleSaveQuestionAnswer(id, selected));
    };

    render() {
        const { authenticatedUserDetails, question, author, id, detailed } = this.props;
        if (!question) {
            return <Navigate to="/error" />;
        }
        
        return (
            <Card>
                <Card.Content>
                    <Card.Header> {author.name} asks:</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Feed>
                        <Feed.Event>
                            <Feed.Label image={author.avatorURL} className='avator' />
                            <Feed.Content>
                                <Feed.Date>
                                    time: {new Date(question.timestamp).toLocaleTimeString} | {new Date(question.timestamp).toLocaleDateString}
                                </Feed.Date>
                                {detailed ? (
                                    <Feed.Summary>
                                        Would you rather... <b>{question.optionOne.text}</b> or <b>{question.optionTwo.text}</b>
                                    </Feed.Summary>
                                ) : (
                                    <div>
                                        <h4>Would you rather...</h4>
                                        <p>
                                            <b> ...{question.optionOne.text}</b> or <b>{question.optionTwo.text}</b>
                                        </p>
                                        <Link to={`/question/$id`}>
                                            <Button>
                                                view Poll
                                            </Button>
                                        </Link>
                                    </div>
                                )}

                                {authenticatedUserDetails.answers[question.id] ? (
                                    <div>
                                        Chosen Answer:
                                        {question[authenticatedUserDetails.answers[question.id]].text}
                                        {detailed && (
                                            <div>
                                                Results:
                                                {question.optionOne.text}
                                                <ul>
                                                    <li>Votes: {question.optionOne.votes.length}</li>
                                                    <li>
                                                        Percentage: {(question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length) * 100)} %
                                                    </li>
                                                </ul>
                                                {question.optionTwo.text}
                                                <ul>
                                                    <li>Votes: {question.optionTwo.votes.length}</li>
                                                    <li>
                                                        Percentage: {(question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length) * 100)} %
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                    ) : (
                                        // When user hasn't asnwered the question
                                        <div>
                                            <span>
                                                {detailed ? (
                                                    <form onSubmit={this.submitHandler}>
                                                        <div>
                                                            <input type="radio" id="optionone" value="optionOne" onChange={(e) => this.optionHandler(e.currentTarget.value)} />
                                                            <label htmlFor="optionone">
                                                                {question.optionOne.text}
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <input type="radio" id="optiontwo" value="optionTwo" onChange={(e) => this.optionHandler(e.currentTarget.value)} />
                                                            <label htmlFor="optiontwo">
                                                                {question.optionOne.text}
                                                            </label>
                                                        </div>
                                                        <button type="submit">
                                                            Submit
                                                        </button>
                                                    </form>
                                                ) : null}
                                            </span>
                                        </div>
                                    )}
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                </Card.Content>
            </Card>
        );
    } 
}

function mapStateToProps({ authenticatedUser, users, questions }, { id }) {
    const question = questions[id];
    const author = question ? users[question.author] : "";
    const authenticatedUserDetails = users[authenticatedUser];
    return {
        question,
        author,
        authenticatedUserDetails
    };
}

export default withRouter(connect(mapStateToProps)(Question));