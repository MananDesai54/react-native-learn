import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CATAGORIES } from "../data/dummy";
import CatagoryGrid from "../components/CatagoryGrid";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderIcon";

const CatagoriesScreen = (props) => {
  const renderItems = ({ item }) => {
    return (
      <CatagoryGrid
        color={item.color}
        title={item.title}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "CatagoryMeal",
            params: {
              catagoryId: item.id,
            },
          })
        }
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        numColumns={2}
        data={CATAGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderItems}
      />
    </View>
  );
};

CatagoriesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Meal Catagories",
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
});

export default CatagoriesScreen;

{
  /* <Button
    title="Go to Meals"
    onPress={() => {
      props.navigation.navigate({ routeName: "CatagoryMeal" });
    }}
  />
  <Button
    title="Replace Meals"
    onPress={() => {
      props.navigation.replace("CatagoryMeal");
    }}
  /> */
}
