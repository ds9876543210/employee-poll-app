import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Tab } from "semantic-ui-react";

class Dashboard extends Component {
    render () {
        const { answeredQuestions, unansweredQuestions } = this.props;

        const panes = [
            {
                menuItem: "Unanswered Questions",
                render: () => (
                    <Tab.Pane>
                        {unansweredQuestions.map(question => (
                            <div key={question.id}>
                                <Question question={question}/>
                            </div>
                        ))}
                    </Tab.Pane>
                )
            },
            {
                menuItem: "Answered Questions",
                render: () => (
                    <Tab.Pane>
                        {answeredQuestions.map(question => (
                            <div key={question.id}>
                                <Question id={question.id} />
                            </div>
                        ))}
                    </Tab.Pane>
                )
            }
        ];
        return <Tab panes={panes} className="tab" />
    }
}

function mapStateToProps({ authenticatedUser, questions, users }) {
    const userAnsweredIds = Object.keys(users[authenticatedUser].answers);
    const answeredQuestions = Object.values(questions).filter(quest => !userAnsweredIds.includes(quest.id)).sort((a,b) => b.timestamp - a.timestamp);
    const unansweredQuestions = Object.values(questions).filter(quest => userAnsweredIds.includes(quest.id)).sort((a,b) => b.timestamp - a.timestamp);
    return {
        answeredQuestions,
        unansweredQuestions
    };
}

export default connect(mapStateToProps)(Dashboard);