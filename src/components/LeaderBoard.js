import React, { Component } from "react";
import { connect } from "react-redux";
import CardUser from "./CardUser";

class LeaderBoard extends Component {
  render() {
    const { usersDetails } = this.props;
    return (
      <div className="leaderboard-list-container">
        {usersDetails.map(user => (
          <li key={user.name}>
            <CardUser user={user} />
          </li>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const usersDetails = Object.keys(users)
    .map(user => {
      const userCardDetails = {
        name: users[user].name,
        avatarURL: users[user].avatarURL,
        questionsAnswered: Object.keys(users[user].answers).length,
        createdQuestions: users[user].questions.length
      };
      const rank =
        userCardDetails.questionsAnswered + userCardDetails.createdQuestions;
      userCardDetails.rank = rank;
      return userCardDetails;
    })
    .sort((a, b) => b.rank - a.rank);
  return {
    usersDetails
  };
}

export default connect(mapStateToProps)(LeaderBoard);
