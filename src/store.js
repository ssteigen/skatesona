import { createStore } from "redux";

export const SET_BOOT_COLOR = "SET_BOOT_COLOR";
export const SET_LACE_COLOR = "SET_LACE_COLOR";
export const SET_WHEEL_COLOR = "SET_WHEEL_COLOR";

export function setBootColor(color) {
  return {
    type: SET_BOOT_COLOR,
    color,
  };
}

const initialState = {
  bootColor: "pink",
  lacesColor: "violet",
  wheelsColor: "violet",
  toestopColor: "violet",
  eyeletsColor: "silver",
  soleColor: "black",
  plateColor: "silver",
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOOT_COLOR:
      return {
        ...state,
        bootColor: action.color,
      };

    default:
      return state;
  }
}

export default createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
