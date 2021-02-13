import { Users } from "./types";
import axios from "axios";
// import axios from "../services/axiosService";

export const getUsersAction = () => async (dispatch) => {
  dispatch({ type: Users.GET_USER_START });
  return axios
    .get("https://randomuser.me/api/?results=5000")
    .then((response) => {
      console.log("user:", response.data.results);
      dispatch({
        type: Users.GET_USER_SUCCESS,
        payload: response.data.results,
      });

      return response.data.results;
    })
    .catch((error) => {
      dispatch({ type: Users.GET_USER_FAILURE });

      throw error.response?.data;
    });
};
