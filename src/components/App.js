import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-redux-loading";
import NavBar from "./NavBar";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import NewQuestionPoll from "./NewQuestionPoll";
import LeaderBoard from "./LeaderBoard";
import Poll from "./Poll";
import Error from "./Error";
import MainRoute from "./MainRoute";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    const { dispatch, loading } = this.props;
    if (loading === true) {
      dispatch(handleInitialData());
    }
  }
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <div>
            <LoadingBar />
            {this.props.loading === true ? null : (
              <div>
                <Switch>
                  <Route path="/login" exact component={LoginPage} />
                  <MainRoute path="/" exact component={HomePage} />
                  <MainRoute path="/add" exact component={NewQuestionPoll} />
                  <MainRoute
                    path="/questions/:question_id"
                    exact
                    component={Poll}
                  />
                  <MainRoute
                    path="/leaderboard"
                    exact
                    component={LeaderBoard}
                  />
                  <Route component={Error} />
                </Switch>
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    loading: isEmpty(users)
  };
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export default connect(mapStateToProps)(App);
