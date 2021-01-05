import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from "react-native";
import Colors from "../constants";

const MealItem = (props) => {
  let T = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    T = TouchableNativeFeedback;
  }
  return (
    <View style={styles.meal}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ flex: 1 }}
        onPress={props.onSelect}
      >
        <View style={styles.mealDetail}>
          <ImageBackground
            source={{
              uri: props.meal.imageUrl,
            }}
            resizeMode="cover"
            style={styles.image}
            fadeDuration={500}
          >
            <View style={styles.text}>
              <Text numberOfLines={2} style={styles.textStyle}>
                {props.meal.title}
              </Text>
            </View>
            <View style={styles.detail}>
              <Text style={{ ...styles.textStyle, color: "black" }}>
                {props.meal.duration}Min
              </Text>
              <Text style={{ ...styles.textStyle, color: "black" }}>
                {props.meal.complexity}
              </Text>
              <Text style={{ ...styles.textStyle, color: "black" }}>
                {props.meal.affordability}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  meal: {
    flex: 1,
    margin: 16,
    height: 200,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    position: "relative",
    elevation: 8,
  },
  mealDetail: {
    flex: 1,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  text: {
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    padding: 8,
    width: "100%",
  },
  detail: {
    backgroundColor: "#999",
    padding: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textStyle: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    // fontFamily: "open-sans",
  },
  image: {
    justifyContent: "flex-end",
    flex: 1,
  },
});

export default MealItem;
