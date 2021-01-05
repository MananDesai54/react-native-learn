import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const CatagoryGrid = (props) => {
  let T = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    T = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <T style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text numberOfLines={2} style={styles.title}>
            {props.title}
          </Text>
        </View>
      </T>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    margin: 8,
    flex: 1,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 8,
  },
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 10,
    justifyContent: "flex-end",
  },
  title: {
    // fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default CatagoryGrid;
