import { apartmentsReducer } from "./apartments";
import { combineReducers } from "redux";

export const getReducers = () => {
  return combineReducers({
    Apartments: apartmentsReducer
  });
};
