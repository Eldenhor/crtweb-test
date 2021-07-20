import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getReducers } from "./reducers";
import { loadState, saveState } from "./localStorage";
import { throttle } from "lodash";

const persistedState = loadState();
export const store = createStore(
  getReducers(),
  persistedState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

store.subscribe(throttle(() => {
  saveState({
    Apartments: store.getState().Apartments,
  });
}, 1000));

export type AppDispatch = typeof store.dispatch;
