import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardContent, Image, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class AskedQuestions extends Component {
  handleViewPoll = e => {
    e.preventDefault();
    const { id, history } = this.props;
    history.push({
      pathname: `/questions/${id}`,
      state: { id: id }
    });
  };

  render() {
    const { question, user, id } = this.props;
    const questionHeader = user.name;
    const questionDescription = question.optionOne.text.substring(0, 15);
    return (
      <Link to={`/questions/${id}`}>
        <div className="dashboard-list-container">
          <Card fluid raised {...{ className: "question-list-card" }}>
            <Card.Content style={{ background: "#8ec8e2", height: 40 }}>
              <Card.Header>{questionHeader} Says:</Card.Header>
            </Card.Content>
            <CardContent style={{ height: 110 }}>
              <Image
                src={user.avatarURL}
                size="tiny"
                circular
                verticalAlign="middle"
                spaced="left"
              />
              <div className="verticle-divider" />
              <div className="dashboard-list-question-info description">
                <Card.Header className="ui header">
                  Would You Rather
                </Card.Header>
                <Card.Description style={{ marginBottom: 8 }}>
                  .... {questionDescription} ....
                </Card.Description>
                <Button
                  fluid
                  basic
                  color="dark blue"
                  style={{ height: 30, fontSize: 12 }}
                  onClick={this.handleViewPoll}
                >
                  View Poll
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Link>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  const user = users[question.author];
  return {
    question,
    user
  };
}

export default withRouter(connect(mapStateToProps)(AskedQuestions));
