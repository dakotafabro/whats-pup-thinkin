import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import pupReducer from "./pupReducer";
import submissionReducer from "./submissionReducer";
import singlePupReducer from "./singlePupReducer";

const rootReducer = combineReducers({
  firestoreSubmissions: firestoreReducer,
  submissions: submissionReducer,
  pups: pupReducer,
  singlePup: singlePupReducer,
});

export default rootReducer;
