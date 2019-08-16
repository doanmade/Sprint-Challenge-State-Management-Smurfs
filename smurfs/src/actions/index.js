import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const POST_SMURFS_START = "POST_SMURFS_START";
export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS";
export const POST_SMURFS_FAIL = "POST_SMURFS_FAIL";

export const REMOVE_SMURFS_SUCCESS = "REMOVE_SMURFS_SUCCESS";

export const addToVillage = newSmurf => {
  return dispatch => {
    dispatch({ type: POST_SMURFS_START });
    axios
      .post(`http://localhost:3333/smurfs`, newSmurf)
      .then(res => dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data }))
      .catch(err =>
        dispatch({ type: POST_SMURFS_FAIL, payload: err.response })
      );
  };
};
export const getSmurf = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        const data = res.data;
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: data });
        console.log("RESPONSE:", data);
      })
      .catch(err => {
        console.log("ERROR:", err);
        dispatch({ type: FETCH_SMURFS_FAIL, payload: err });
      });
  };
};
