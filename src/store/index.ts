import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getReducers } from "./reducers";

export const store = createStore(
  getReducers(),
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export type AppDispatch = typeof store.dispatch;
