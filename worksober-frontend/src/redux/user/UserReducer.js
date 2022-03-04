import { CREATE_USER, DELETE_USER, GET_USERS, LOADING, UPDATE_USER } from "./UserActionTypes";

const INITIAL_STATE = {
  users: null,
  loading: false,
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case CREATE_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
