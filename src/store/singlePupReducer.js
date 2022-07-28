import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/index";

const GET_SINGLE_PUP = "GET_SINGLE_PUP";

const _getSinglePup = (pup) => {
  return {
    type: GET_SINGLE_PUP,
    pup,
  };
};

export const getSinglePup = (id) => {
  return async (dispatch) => {
    try {
      const allPups = await getDocs(collection(db, "pups"));
      let singlePup = {};
      allPups.forEach((doc) => {
        if (doc.id === id) {
          singlePup = doc.data();
        }
      });
      dispatch(_getSinglePup(singlePup));
    } catch (err) {
      console.error(err);
    }
  };
};

const singlePupReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_PUP:
      return action.pup;
    default:
      return state;
  }
};

export default singlePupReducer;
