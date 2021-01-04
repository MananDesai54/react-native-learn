import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CatagoryMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>CatagoryMeal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
