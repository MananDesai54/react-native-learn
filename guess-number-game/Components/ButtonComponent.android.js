import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../constants/colors";

const ButtonComponent = (props) => {
  let T = TouchableOpacity;
  if (Platform.Version >= 21) {
    T = TouchableNativeFeedback;
  }

  return (
    <View style={{ borderRadius: 20, overflow: "hidden" }}>
      <T activeOpacity={0.4} onPress={props.onPress}>
        <View style={{ ...styles.btn, ...props.style }}>
          <Text style={styles.btnTxt}>{props.children}</Text>
        </View>
      </T>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: Colors.PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    fontFamily: "open-sans",
    color: "white",
    fontSize: 15,
  },
});

export default ButtonComponent;
