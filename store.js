import { createStore, combineReducers } from "redux";
import { count, someOtherReducer } from "./reducers";

export const store = createStore(combineReducers({ count, someOtherReducer }));

// getState returns the current state of the store

store.getState();

// dispatch - used to dispatch an action and trigger our reducers
store.dispatch(addNumber(7));

// this would cause our count retuder to then be called with the current store
// state and our "add nummber" action

// naive implementation of combineReducers

const combineReducers = reducers => {
  return (state = {}, action) => {
    const newState = {};
    for (let key in reducers[key]) {
      const reducer = reducers[key];
      newState[key] = reducer(state[key], action);
    }
    return newState;
  };
};
