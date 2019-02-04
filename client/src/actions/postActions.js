import axios from "axios";

import { ADD_POST, GET_ERRORS } from "./types";

//Add post
export const addPost = postDate => dispatch => {
  axios
    .post("/api/posts", postDate)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
