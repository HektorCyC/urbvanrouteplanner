import { actionTypes } from "./action";

const countInitialState = {
  input: null,
  responseRoute: null,
};

export default function reducer(state = countInitialState, action) {
  switch (action.type) {
    case actionTypes.SUBMIT:
      return Object.assign({}, state, {
        input: action.payload,
      });
    case actionTypes.RESPONSE:
      return Object.assign({}, state, {
        responseRoute: action.payload,
      });
    default:
      return state;
  }
}
