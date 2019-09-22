import { connect } from "react-redux";
import Lists from "../components/Lists";

const mapStateToProps = state => ({
  lists: state.list.ids
});

export default connect(mapStateToProps)(Lists);
