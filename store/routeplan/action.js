import axios  from "axios";
export const actionTypes = {
  SUBMIT: "SUBMIT",
};

export const submitRoute = (payload) => async (dispatch) => {
  const res = await axios.get(
    `https://maps.googleapis.com/maps/api/directions/json?origin=${payload.origin[0]},${payload.origin[1]}&destination=${payload.destination[0]},${payload.destination[1]}&alternatives=true&key=AIzaSyAlMM6rsG0LrVu2y0GXdJyyt7zpc4TVnb8`
  );
  // const res = await axios.get('https://reqres.in/api/users?page=2');
  console.log(res)
  return dispatch({ type: actionTypes.SUBMIT, payload: payload });
};
