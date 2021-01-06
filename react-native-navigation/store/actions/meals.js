import { ADD_FILTERS, TOGGLE_FAVORITE } from "../types";

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    payload: {
      mealId: id,
    },
  };
};

export const addFilters = (filters) => {
  return {
    type: ADD_FILTERS,
    payload: filters,
  };
};
