import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { CATAGORIES, MEALS } from "../data/dummy";

const CatagoryMealScreen = (props) => {
  const catagoryId = props.navigation.getParam("catagoryId");
  const displayMeal = MEALS.filter(
    (meal) => meal.catagoryIds.indexOf(catagoryId) >= 0
  );

  const renderItem = ({ item }) => {
    return (
      <MealItem
        meal={item}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              item,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={displayMeal}
        renderItem={renderItem}
      />
    </View>
  );
};

CatagoryMealScreen.navigationOptions = (navigationData) => {
  const catagoryId = navigationData.navigation.getParam("catagoryId");
  const selectedCatagory = CATAGORIES.find((cat) => cat.id === catagoryId);
  return {
    headerTitle: selectedCatagory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CatagoryMealScreen;

{
  /* <Button
    title="Goto Meal Detail"
    onPress={() => {
      props.navigation.navigate({ routeName: "MealDetail" });
      // props.navigation.push("MealDetail"); // also works for same page
    }}
  />
  <Button
    title="Go back"
    onPress={() => {
      props.navigation.goBack();
      // props.navigation.pop(); // also works for same page
    }}
  /> */
}
