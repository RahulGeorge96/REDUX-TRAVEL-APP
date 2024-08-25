// src/store.js
import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";
import destinationReducer from "../reducers/destinationReducer";


const store = legacy_createStore(
  destinationReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
