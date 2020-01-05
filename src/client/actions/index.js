import fetch from "node-fetch";
export const FETCH_USERS = "fetch_users";

export const fetchUsers = () => async dispatch => {
  const res = await fetch("http://react-ssr-api.herokuapp.com/users");
  const data = await res.json();

  return dispatch({
    type: FETCH_USERS,
    payload: data
  });
};
