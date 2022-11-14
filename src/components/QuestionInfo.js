import React from "react";
import { connect } from 'react-redux';
import Question from './Question';

const QuestionInfo = props => (
    <div className="component">
        <Question id={props.match.params.id} detailed/>
    </div>
)

export default connect()(QuestionInfo);