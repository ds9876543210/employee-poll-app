import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAuthenticatedUser } from '../actions/authenticateUser';

class NavigationBar extends Component {
    handleLogOut = () => {
        const { dispatch } = this.props;
        dispatch(setAuthenticatedUser(null));
    };

    render() {
        const { authenticatedUser, users } = this.props;
        // If authenitcatedUser is null(when not logged in), then we do not need to show NavigationBar
        if (authenticatedUser) {
            return (
                <div className='NavBar'>
                    <NavLink to="/" className="option" exact>
                        Home
                    </NavLink>
                    <NavLink to="/add" className="option" exact>
                        Add New Question
                    </NavLink>
                    <NavLink to="/leaderboard" className="option" exact>
                        LeaderBoard View
                    </NavLink>
                    <div className='right-hand-menu'>
                        <span className='item'>
                            <img className='avatar-image' src={users[authenticatedUser].avatarURL} alt="" />
                            {authenticatedUser}
                        </span>
                        <button className='logout-button' onClick={this.handleLogOut}>
                            Logout
                        </button>
                    </div>
                </div>
            );
        }
    }
}

function mapStateToProps({ authenticatedUser, users }) {
    return {
        authenticatedUser,
        users
    };
}

export default connect(mapStateToProps)(NavigationBar);