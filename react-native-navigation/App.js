import React, { useState, Fragment } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MealsNavigator from "./navigation/MealsNavigator";
import { enableScreens } from "react-native-screens";

enableScreens();

const fetchFonts = async () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
export default function App() {
  const [isFetched, setIsFetched] = useState(false);
  if (!isFetched) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setIsFetched(true);
        }}
        onError={(err) => {
          console.log(err);
        }}
      />
    );
  }

  return (
    <Fragment>
      <MealsNavigator />
      <StatusBar
        translucent={true}
        barStyle="default"
        backgroundColor="rgba(0, 0, 0, 0.3)"
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
