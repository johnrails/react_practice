export const ADD_NUMBER = "ADD_NUMBER";

export const MORNING = "MORNING";
export const NIGHT = "NIGHT";
// action creator
// factory for creating actions
const timeOfDays = [MORNING, NIGHT];
export const addNumber = number => ({
  type: ADD_NUMBER,
  payload: number
});

const action = addNumber(7);

export const timeOfDay = {
  type: timeOfDays[Math.floor(Math.random() * timeOfDays.length)]
};
