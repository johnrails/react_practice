import { ADD_NUMBER } from "./actions";
export const count = (state = 0, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return state + action.payload;
    default:
      return state;
  }
};

export const someOtherReducer = (state = "Good Morning", action) => {
  switch (action.type) {
    case MORNING:
      return state;
    case NIGHT:
      return "Good Night";
    default:
      return state;
  }
};
