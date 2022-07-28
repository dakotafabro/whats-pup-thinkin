import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import PupReducer from "./pupReducer";
import submissionReducer from "./submissionReducer";

const rootReducer = combineReducers({
  firestoreSubmissions: firestoreReducer,
  submissions: submissionReducer,
  pups: PupReducer,
});

export default rootReducer;
