import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CATAGORIES } from "../data/dummy";
import CatagoryGrid from "../components/CatagoryGrid";

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

CatagoriesScreen.navigationOptions = {
  headerTitle: "Meal Catagories",
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
