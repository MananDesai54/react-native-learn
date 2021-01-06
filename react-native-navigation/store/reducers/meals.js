import { MEALS } from "../../data/dummy";
import { ADD_FILTERS, TOGGLE_FAVORITE } from "../types";

const initState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export default function mealsReducers(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_FAVORITE:
      const mealIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === payload.mealId
      );
      if (mealIndex >= 0) {
        const updatedFavorites = [...state.favoriteMeals];
        updatedFavorites.splice(mealIndex, 1);
        return {
          ...state,
          favoriteMeals: updatedFavorites,
        };
      } else {
        const newMeal = state.meals.find((meal) => meal.id === payload.mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(newMeal),
        };
      }

    case ADD_FILTERS:
      const filteredMeals = state.meals.filter((meal) => {
        if (payload.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (payload.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (payload.vegan && !meal.isVegan) {
          return false;
        }
        if (payload.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        filteredMeals,
      };

    default:
      return state;
  }
}
