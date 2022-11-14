import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { handleInitialDataInfo } from '../actions/shared';
import Dashboard from './Dashboard';
import Login from './Login';
import NewQuestion from './NewQuestion';
import QuestionInfo from './QuestionInfo';
import NavigationBar from './NavigationBar';
import LeaderView from './LeaderView';
import ErrorPage from './ErrorPage';

class App extends Component {

  componentDidMount() {
    console.log("step 1- initial");
    this.props.dispatch(handleInitialDataInfo());
    console.log(this.props);
  }

  render() {
    console.log("in App render");
    // const { authenticatedUser } = this.props.authenticatedUser;
    console.log(this.props.authenticatedUser);
    console.log(this.props.loading);
    return (
      <BrowserRouter>
        <div className='App'>
          {this.props.loading === true ? (
            <Login />
          ) : (
            <Fragment>
              <NavigationBar authenticatedUser={this.props.authenticatedUser} />
              <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/questions/:id" element={<QuestionInfo />} />
                <Route path="/add" element={<NewQuestion />} />
                <Route path="/leaderboard" element={<LeaderView />} />
                <Route path="/error" element={<ErrorPage />} />
              </Routes>
            </Fragment>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authenticatedUser }) {
  return {
    loading: (authenticatedUser === undefined || authenticatedUser === null),
    authenticatedUser,
  };
}

export default connect(mapStateToProps)(App);