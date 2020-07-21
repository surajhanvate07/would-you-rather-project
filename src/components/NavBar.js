import React, { Component } from "react";
import { Menu, Image, Dropdown, Icon } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../actions/authedUser";
var logo = require("../assets/icons/React-Redux.jpeg");

class NavBar extends Component {
  handleSignout = (e, { name }) => {
    const { history } = this.props;
    e.preventDefault();
    if (name === "sign Out") {
      this.props.dispatch(signOut());
      history.push("/login");
    }
  };

  handleDropdownSignoutClick = (e, { name }) => {
    const { history } = this.props;
    e.preventDefault();
    this.props.dispatch(signOut());
    history.push("/login");
  };

  render() {
    const { authedUser, users } = this.props;
    const user = users[authedUser];
    const trigger = (
      <Icon
        size="big"
        name="bars"
        style={{
          height: "40px",
          width: "40px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          marginLeft: "5px"
        }}
      />
    );
    return (
      <div>
        <div className="nav-desktop">
          <Menu stackable pointing secondary>
            <Menu.Item as={NavLink} name="home" exact to="/" color="sky blue">
              Home
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              name="newQuestion"
              exact
              to="/add"
              color="sky blue"
            >
              New Question
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              name="leaderBoard"
              exact
              to="/leaderboard"
              color="sky blue"
            >
              Leader Board
            </Menu.Item>
            {authedUser ? (
              <Menu.Menu position="right">
                <Menu.Item name="username">Hello, {user.name}</Menu.Item>
                <Image
                  style={{ marginTop: "0.35em" }}
                  avatar
                  src={user !== "undefined" ? user.avatarURL : logo}
                />
                <Menu.Item
                  as={NavLink}
                  name="Signout"
                  exact
                  to="/login"
                  color="sky blue"
                  onClick={this.handleDropdownSignoutClick}
                >
                  Sign Out
                </Menu.Item>
              </Menu.Menu>
            ) : (
              <div />
            )}
          </Menu>
        </div>

        <div className="nav-mobile">
          <Menu>
            <Dropdown
              trigger={trigger}
              pointing="top left"
              style={{
                height: "45px",
                width: "45px",
                justifyContent: "center",
                alignItems: "center"
              }}
              icon={null}
            >
              <Dropdown.Menu>
                <Dropdown.Item
                  as={NavLink}
                  exact
                  to="/"
                  name="home"
                  text="Home"
                />
                <Dropdown.Item
                  as={NavLink}
                  exact
                  to="/add"
                  name="newQuestion"
                  text="New Question"
                />
                <Dropdown.Item
                  as={NavLink}
                  exact
                  to="/leaderboard"
                  name="leaderBoard"
                  text="Leader Board"
                />
                <Dropdown.Item
                  name="Signout"
                  text="Sign Out"
                  onClick={this.handleDropdownSignoutClick}
                />
              </Dropdown.Menu>
            </Dropdown>
            {authedUser ? (
              <Menu.Menu position="right">
                <Menu.Item>Hello, {user.name}</Menu.Item>
                <Image
                  style={{ marginTop: "0.35em" }}
                  avatar
                  src={user !== "undefined" ? user.avatarURL : logo}
                />
              </Menu.Menu>
            ) : (
              <div />
            )}
          </Menu>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default withRouter(connect(mapStateToProps)(NavBar));
