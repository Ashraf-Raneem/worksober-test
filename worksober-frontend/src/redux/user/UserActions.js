import axios from "axios";
import { CREATE_USER, DELETE_USER, GET_USERS, LOADING, UPDATE_USER } from "./UserActionTypes";
import { url } from "../../Utils";

export const getUsers = () => (dispatch) => {
  dispatch(loading());
  axios
    .get(url + `/users`)
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    })
    .catch((err) => {});
};

export const postUser = (formData) => (dispatch) => {
  dispatch(loading());
  axios
    .post(url + "/users", formData)
    .then((res) => {
      dispatch({
        type: CREATE_USER,
        payload: res.data,
      });
    })
    .catch((err) => {});
};

export const updateUser = (formData, id) => (dispatch) => {
  dispatch(loading);
  axios
    .put(url + `/users/${id}`, formData)
    .then((res) => {
      dispatch({
        type: UPDATE_USER,
        payload: res.data,
      });
    })
    .catch((err) => {});
};

export const deleteUser = (id) => (dispatch) => {
  dispatch(loading);
  axios
    .delete(url + `/users/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_USER,
      });
    })
    .catch((err) => {});
};

const loading = () => {
  return {
    type: LOADING,
  };
};
