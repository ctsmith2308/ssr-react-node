export const FETCH_USERS = "fetch_users";

export const fetchUsers = () => async (dispatch, getStore, api) => {
  // const res = await fetch("http://react-ssr-api.herokuapp.com/users");
  // const data = await res.json();
  const res = await api.get("/users");
  dispatch({
    type: FETCH_USERS,
    payload: res.data
  });
};
