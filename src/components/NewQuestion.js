import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/questions';
import { Navigate } from 'react-router-dom';

class NewQuestion extends Component {
    state = {
        firstOption: "",
        secondOption: "",
        goToHome: false
    };

    submitHandler = (e) => {
        e.preventDefault();
        const { dispatch, authenticatedUser } = this.props;
        const { firstOption, secondOption } =  this.state;
        dispatch(handleSaveQuestion(firstOption, secondOption, authenticatedUser));
        this.setState(() => ({
            firstOption,
            secondOption,
            goToHome: true
        }));
    };

    changeHandler = (e, option) => {
        const textInput = e.target.value;
        this.setState(() => ({
            [option]: textInput
        }));
    };

    render () {
        const { firstOption, secondOption, goToHome } = this.state;
        
        if (goToHome) {
            return <Navigate to="/" />
        }

        return (
            <div className='new-question'>
                <h2>Create New Poll Question</h2>
                <h6>Would you rather...</h6>
                <form className='new-question-form' onSubmit={this.submitHandler}>
                    <div className='field'>
                        <label>optionOne</label>
                        <input type="text" placeholder='Enter option one text' onChange={(e) => this.changeHandler(e, "firstOption")} defaultValue={firstOption} />
                    </div>
                    <div className='field'>
                        <label>optionTwo</label>
                        <input type="text" placeholder='Enter option two text' onChange={(e) => this.changeHandler(e, "secondOption")} defaultValue={secondOption} />
                    </div>
                    <button type='submit'>
                        Add Poll Question
                    </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ authenticatedUser }) {
    return {
        authenticatedUser
    }
}

export default connect(mapStateToProps)(NewQuestion);