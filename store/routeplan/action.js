export const actionTypes = {
  SUBMIT: "SUBMIT",
  RESPONSE: "RESPONSE",
};

export const submitRoute = (payload) => (dispatch) => {
  return dispatch({ type: actionTypes.SUBMIT, payload: payload });
};

export const responseRoute = (payload) => (dispatch) => {
  return dispatch({ type: actionTypes.RESPONSE, payload: payload });
};
