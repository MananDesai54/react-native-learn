import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderIcon";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy";

const FavoriteScreen = (props) => {
  const data = MEALS.filter((meal) => meal.catagoryIds.indexOf("c2") >= 0);

  return <MealList data={data} navigation={props.navigation} />;
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
