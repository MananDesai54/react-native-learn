import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CatagoriesScreen from "../screens/CatagoriesScreen";
import CatagoryMealScreen from "../screens/CatagoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants";

const MealsNavigator = createStackNavigator(
  {
    Catagories: {
      screen: CatagoriesScreen,
    },
    CatagoryMeal: {
      screen: CatagoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
    // mode: "modal",
  }
);

export default createAppContainer(MealsNavigator);
