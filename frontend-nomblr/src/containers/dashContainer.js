import { connect } from "react-redux";

//import { getGrandmasDishes, deleteDish } from '../actions/dishActions';

import UserDash from "../components/Dashboard/UserDash";

const mapStateToProps = state => {
  return {
    dishes: state.dishes.dishes,
    userId: state.userAuth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGrandmasDishes: id => dispatch(getGrandmasDishes(id)),
    deleteDish: (dish_id, grannyId) => dispatch(deleteDish(dish_id, grannyId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDash);
