import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Account from "./Account";
import { testapi } from "src/action";

class AccountContainer extends PureComponent {
  render() {
    return <Account {...this.props} />;
  }
}

const mapStateToProps = ({ user, account }) => {
  const { email, name, token } = user;
  const { msg } = account;
  return { email, name, token, msg };
};

export default connect(
  mapStateToProps,
  { testapi }
)(AccountContainer);
