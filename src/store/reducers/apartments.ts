import { ActionTypes } from "../actions";
import { extend, keyBy } from "lodash";
import produce from "immer";
import * as type from "../reduxTypes"
import { RootStateType } from "../../types";

const initialState: RootStateType["Apartments"] = {};

export const apartmentsReducer = (state = initialState, action: ActionTypes) => {
  return produce(state, draft => {
    switch (action.type) {
      case type.UPDATE_APARTMENTS_DATA_SUCCESS:
        draft = extend(draft, keyBy(action.apartmentsData, "id"));
        break;

      case type.UPDATE_APARTMENT_LIKE:
        draft[action.apartmentId].liked = action.likedValue;
        break;

      default:
        break;
    }
  });
};
