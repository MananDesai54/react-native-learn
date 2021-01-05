import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CatagoriesScreen from "../screens/CatagoriesScreen";
import CatagoryMealScreen from "../screens/CatagoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import FilterScreen from "../screens/FilterScreen";
import Colors from "../constants";

const defaultNavigationOptions = (color) => ({
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? color : "white",
  },
  // headerTitleStyle: {
  //   fontFamily: ''
  // },
  headerTintColor: Platform.OS === "android" ? "white" : color,
});

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
    defaultNavigationOptions: defaultNavigationOptions(Colors.primary),
  }
);

const FavoriteNavigator = createStackNavigator(
  {
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions(Colors.accent),
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-restaurant" size={24} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontWeight: "bold" }}>Meals</Text>
        ) : (
          "Meals"
        ),
    },
  },
  Favorites: {
    screen: FavoriteNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.accent,
    },
  },
};

const MealsFavoritesNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: "white",
          // labelStyle: {
          //   fontFamily: ""
          // }
        },
      });

const FilterNavigator = createStackNavigator(
  {
    Filters: FilterScreen,
  },
  {
    // navigationOptions: {
    //   drawerLabel: "Filter...",
    // },
    defaultNavigationOptions: defaultNavigationOptions(Colors.primary),
  }
);

const RootNavigator = createDrawerNavigator(
  {
    Meals: {
      screen: MealsFavoritesNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FilterNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accent,
      labelStyle: {
        // fontStyle: 'open-sans'
      },
    },
  }
);

export default createAppContainer(RootNavigator);
