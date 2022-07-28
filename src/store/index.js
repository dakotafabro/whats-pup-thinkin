import { combineReducers } from "redux";
import PupReducer from "./pupReducer";
import submissionReducer from "./submissionReducer";

const rootReducer = combineReducers({
  submissions: submissionReducer,
  pups: PupReducer,
});

export default rootReducer;
