import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { PlaceContext } from "./context/PlaceContext";
import PlaceNavigator from "./navigation/PlaceNavigator";
import { Place } from "./models/Place";

export default function App() {
  const [place, setPlace] = useState([]);
  const addPlace = ({ title, imageUri }) => {
    const newPlace = new Place(Math.random().toString(), title, imageUri);
    setPlace((prevPlace) => prevPlace.concat(newPlace));
  };

  return (
    <PlaceContext.Provider value={{ place, addPlace }}>
      <View style={styles.container}>
        <PlaceNavigator />
        <StatusBar style="auto" />
      </View>
    </PlaceContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
