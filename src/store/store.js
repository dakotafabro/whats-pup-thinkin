import { applyMiddleware, createStore } from "redux";
import rootReducer from "./index";
import firebase from "../firebase/index";
import thunkMiddleware from "redux-thunk";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware.withExtraArgument({ getFirestore }),
      createLogger({ collapsed: true })
    ),
    reduxFirestore(firebase)
  )
);

export default store;
