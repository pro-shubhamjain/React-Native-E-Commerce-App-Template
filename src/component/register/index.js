import { connect } from "react-redux";
import Registers from "./Register";
import { registerUser } from "src/action";

const mapStateToProps = ({ register }) => {
  const { loading, message } = register;
  return { loading, message };
};

export default connect(mapStateToProps, { registerUser })(Registers);
