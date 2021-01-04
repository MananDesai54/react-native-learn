import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Meal Detail</Text>
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

export default MealDetailScreen;

{
  /* <Button
      title="Home"
      onPress={() => {
        props.navigation.popToTop();
      }}
    /> */
}
