import { actionTypes } from "./action";

const countInitialState = {
  response: 0
};

export default function reducer(state = countInitialState, action) {
  switch (action.type) {
    case actionTypes.SUBMIT:
      return {
        // origin: state.origin,
        response: state.response,
        // destination: state.destination,
      };
    default:
      return state;
  }
}
