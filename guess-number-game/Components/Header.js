import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";
import BodyText from "./BodyText";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <BodyText style={styles.headerTitle}>{props.title}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.PRIMARY,
    borderBottomColor: "transparent",
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: Platform.OS === "ios" ? Colors.PRIMARY : Colors.ACCENT,
    fontSize: 20,
    fontFamily: "open-sans",
  },
});

export default Header;
