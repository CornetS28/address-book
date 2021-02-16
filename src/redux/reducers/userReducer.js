import { Users } from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  users: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Users.GET_USER_START:
      return { ...state, isLoading: true };
    case Users.GET_USER_FAILURE:
      return { ...state, isLoading: false };
    case Users.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };

    default:
      return state;
  }
};
