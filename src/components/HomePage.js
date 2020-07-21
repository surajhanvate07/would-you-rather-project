import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import AskedQuestions from "./AskedQuestions";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    const { unansweredQuestions, answeredQuestions } = this.props;

    const panes = [
      {
        menuItem: "Unanswered Questions",
        render: () => (
          <Tab.Pane attached="bottom">
            {unansweredQuestions.map(id => (
              <li key={id}>
                <AskedQuestions id={id} />
              </li>
            ))}
          </Tab.Pane>
        )
      },
      {
        menuItem: "Answered Questions",
        render: () => (
          <Tab.Pane attached="bottom">
            {answeredQuestions.map(id => (
              <li key={id}>
                <AskedQuestions id={id} />
              </li>
            ))}
          </Tab.Pane>
        )
      }
    ];

    return (
      <div className="dashboard-questions-container">
        <Tab
          menu={{ widths: 2, color: "orange", attached: true, tabular: false }}
          panes={panes}
        />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  const unansweredQuestions = Object.keys(questions)
    .filter(
      i =>
        !questions[i].optionOne.votes.includes(authedUser) &&
        !questions[i].optionTwo.votes.includes(authedUser)
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  const answeredQuestions = Object.keys(questions)
    .filter(
      i =>
        questions[i].optionOne.votes.includes(authedUser) ||
        questions[i].optionTwo.votes.includes(authedUser)
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  return {
    unansweredQuestions,
    answeredQuestions
  };
}
export default connect(mapStateToProps)(HomePage);
