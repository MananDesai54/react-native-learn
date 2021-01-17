import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { PlaceContext } from "./context/PlaceContext";
import PlaceNavigator from "./navigation/PlaceNavigator";
import { Place } from "./models/Place";
import * as FileSystem from "expo-file-system";
import { init, insertData, getData } from "./helper/db";

init()
  .then(() => console.log("DB created"))
  .catch((err) => console.log(err.message));

export default function App() {
  const [place, setPlace] = useState([]);
  const addPlace = async ({ title, imageUri }) => {
    const filename = imageUri.split("/").pop();
    const newPath = FileSystem.documentDirectory + filename;
    try {
      await FileSystem.moveAsync({
        from: imageUri,
        to: newPath,
      });
      const result = await insertData({
        title,
        imageUri: newPath,
        address: "dummy",
        lat: 1.5,
        long: 1.2,
      });

      const newPlace = new Place(result.insertId, title, newPath);
      setPlace((prevPlace) => prevPlace.concat(newPlace));
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };

  useEffect(() => {
    async function loadData() {
      const data = await getData();
      setPlace(data.rows._array);
    }
    loadData();
  }, []);

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
