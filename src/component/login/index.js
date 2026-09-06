import { connect } from "react-redux";
import Logins from "./Login";
import { loginUser, loginAsDemoUser } from "src/action";

const mapStateToProps = ({ login, user }) => {
  const { message } = login;
  const { token } = user;
  return { token, message };
};

export default connect(mapStateToProps, { loginUser, loginAsDemoUser })(Logins);
