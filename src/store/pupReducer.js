import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/index";

const ADD_PUP = "ADD_PUP";
const GET_PUPS = "GET_PUPS";
const UPDATE_PUP = "UPDATE_PUP";
const DELETE_PUP = "DELETE_PUP";

const _addPup = (pup) => {
  return {
    type: ADD_PUP,
    pup,
  };
};

const _getPups = (pups) => {
  return {
    type: GET_PUPS,
    pups,
  };
};

const _updatePup = (pup) => {
  return {
    type: UPDATE_PUP,
    pup,
  };
};

const _deletePup = (id) => {
  return {
    type: DELETE_PUP,
    id,
  };
};

export const addPup = (pup) => {
  return async (dispatch) => {};
};

export const getPups = () => {
  return async (dispatch) => {
    try {
      const querySnapshot = await getDocs(collection(db, "pups"));
      const allPups = [];
      querySnapshot.forEach((doc) => {
        allPups.push({ id: doc.id, data: doc.data() });
      });
      dispatch(_getPups(allPups));
    } catch (err) {
      console.error(err);
    }
  };
};

export const updatePup = (id, pup) => {
  return async (dispatch) => {};
};

export const deletePup = (id, pup) => {
  return async (dispatch) => {};
};

const pupReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PUP:
      return;
    case GET_PUPS:
      return action.pups;
    case UPDATE_PUP:
      return;
    case DELETE_PUP:
      return;
    default:
      return state;
  }
};

export default pupReducer;
