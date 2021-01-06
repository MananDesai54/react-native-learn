import { MEALS } from "../../data/dummy";
import { TOGGLE_FILTER } from "../types";

const initState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export default function mealsReducers(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_FILTER:
      return state;

    default:
      return state;
  }
}
