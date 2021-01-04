import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CatagoriesScreen from "../screens/CatagoriesScreen";
import CatagoryMealScreen from "../screens/CatagoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
  Catagories: CatagoriesScreen,
  CatagoryMeal: {
    screen: CatagoryMealScreen,
  },
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);
