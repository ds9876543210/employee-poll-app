import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Feed } from "semantic-ui-react";

class LeaderView extends Component {
    render () {
        const leaderViewInfo = this.props;
        return (
            <div>
                { leaderViewInfo ? 
                leaderViewInfo.map((user) => (
                    <Card key={user.id}>
                        <Card.Content>
                            <Feed>
                                <Feed.Event>
                                    <Feed.Label image={user.avatarURL} className='avatar' />
                                    <Feed.Content>
                                        <Feed.Summary>{user.name}</Feed.Summary>
                                        <Feed.Summary>Questions Answered: {user.answeredQuestions}</Feed.Summary>
                                        <Feed.Summary>Questions Created: {user.createdQuestions}</Feed.Summary>
                                        <Feed.Summary>Total: {user.answeredQuestions + user.createdQuestions}</Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>
                            </Feed>
                        </Card.Content>
                    </Card>
                )) 
                : null}
            </div>
        );
    }
}

function mapStateToProps({ authenticatedUser, users, questions }) {
    const leaderViewInfo = users.map((user) => ({
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        answeredQuestions: Object.keys(user.answers).length,
        createdQuestions: questions.filter((question) => question.author === user.id).length
    }))
    .sort((a,b) => (b.answeredQuestions + b.createdQuestions) - (a.answeredQuestions + a.createdQuestions));
    return {
        authenticatedUser,
        leaderViewInfo
    };
}

export default connect(mapStateToProps)(LeaderView);