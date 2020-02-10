import initialState from "../../store/initialStore";
import * as types from "../../actions/types";

export default function chatReducer(
    state = initialState.chat,
    action
  ) {
    switch (action.type) {
      case types.TEST_REDUX_CONFIG:
        return { ...state };
  
      default:
        return state;
    }
  }
  