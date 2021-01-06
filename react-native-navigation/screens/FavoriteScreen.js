import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import CustomHeaderButton from "../components/HeaderIcon";
import MealList from "../components/MealList";

const FavoriteScreen = (props) => {

  const availableMeals = useSelector(state => state.meals.favoriteMeals)

  return <MealList data={availableMeals} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = (navigationData) => {
  return {
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Filter Meals"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoriteScreen;
