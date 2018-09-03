import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Registers from "./Register";
import { registerUser } from "src/action";

class Register extends PureComponent {
  render() {
    return <Registers {...this.props} />;
  }
}

const mapStateToProps = ({ register }) => {
  const { loading, message } = register;
  return { loading, message };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
