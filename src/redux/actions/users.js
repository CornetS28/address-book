import axios from 'axios';
import { Users } from './types';

export const getUsersAction = () => async (dispatch) => {
  dispatch({ type: Users.GET_USER_START });
  return axios
    .get('https://randomuser.me/api/?results=200')
    .then((response) => {
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
