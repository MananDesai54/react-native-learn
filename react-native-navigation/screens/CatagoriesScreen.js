import React from "react";
import {
  Button,
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CATAGORIES } from "../data/dummy";
import Colors from "../constants";

const CatagoriesScreen = (props) => {
  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => props.navigation.navigate({ routeName: "CatagoryMeal" })}
      >
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
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
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
  },
  headerTintColor: Platform.OS === "ios" ? Colors.primary : "white",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  gridItem: {
    marginHorizontal: 16,
    marginVertical: 16,
    flex: 1,
    height: 100,
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
