import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthenticatedUser } from '../actions/authenticateUser';

class Login extends Component {
    state = {
        loggedInUser: ""
    };

    userSelectHandler = (val) => {
        this.setState({
            loggedInUser: val
        });
    };

    submitButtonHandler = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        console.log(this.state.loggedInUser);
        dispatch(setAuthenticatedUser(this.state.loggedInUser));
    };

    render() {
        const users = this.props.users;
        console.log("users-> ", users);
        return (
            <div className='login-form'>
                <h2>LOGIN</h2>
                <form className='form'>
                    <div className='form-fields'>
                        <select defaultValue="0" onChange={(e) => this.userSelectHandler(e.target.value)}>
                            <option value="0" disabled>
                                Select User
                            </option>
                            {users && Object.keys(users).map((userId) => (
                                <option key={userId} value={userId}>
                                    {users[userId].name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className='button' onClick={this.submitButtonHandler} disabled={!this.state.loggedInUser}>
                        Proceed
                    </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ users, authenticatedUser }) {
    return {
        users,
        authenticatedUser,
    };
}

export default connect(mapStateToProps)(Login);