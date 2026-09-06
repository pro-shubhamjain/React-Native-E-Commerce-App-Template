import { connect } from "react-redux";
import HomeScreen from "./HomeScreen";
import { fetchCurrentUser } from "src/action";

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { fetchCurrentUser })(HomeScreen);
