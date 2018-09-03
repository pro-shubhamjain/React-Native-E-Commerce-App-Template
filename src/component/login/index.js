import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Logins from "./Login";
import { loginUser } from "src/action";

class Login extends PureComponent {
  render() {
    return <Logins {...this.props} />;
  }
}

const mapStateToProps = ({ login, user }) => {
  const { message } = login;
  const { token } = user;
  return { token, message };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(Logins);
