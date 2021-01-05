import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

const MealList = (props) => {
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
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={props.data}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default MealList;
