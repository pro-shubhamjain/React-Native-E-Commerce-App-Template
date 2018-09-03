import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Home from "./HomeScreen";
import { fetchCurrentUser } from "src/action";

class HomeContainer extends PureComponent {
  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(
  mapStateToProps,
  { fetchCurrentUser }
)(HomeContainer);
