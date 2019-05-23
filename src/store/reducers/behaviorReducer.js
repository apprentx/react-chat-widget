import { Map } from "immutable";

import { createReducer } from "../../utils/store";

import * as actionTypes from "../actions/actionTypes";

const initialState = Map({
  showChat: false,
  disabledInput: false,
  msgLoader: false
});

const behaviorReducer = {
  [actionTypes.TOGGLE_CHAT]: state =>
    state.update("showChat", showChat => !showChat),

  [actionTypes.TOGGLE_INPUT_DISABLED]: (state, data) => {
    if (typeof data.inputDisabler === "undefined") {
      return state.update("disabledInput", disabledInput => !disabledInput);
    }
    return state.update("disabledInput", disabledInput => data.inputDisabler);
  },

  [actionTypes.TOGGLE_MSG_LOADER]: (state, data) => {
    if (typeof data.showMsgLoader === "undefined") {
      return state.update("msgLoader", msgLoader => !msgLoader);
    }
    return state.update("msgLoader", msgLoader => data.showMsgLoader);
  }
};

export default (state = initialState, action) =>
  createReducer(behaviorReducer, state, action);
