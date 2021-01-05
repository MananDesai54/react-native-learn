import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderIcon";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Meal Detail</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const item = navigationData.navigation.getParam("item");

  return {
    headerTitle: item.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("Marked as favorite")}
        />
      </HeaderButtons>
    ),
  };
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
