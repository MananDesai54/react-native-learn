import React, { useState } from "react";
import { View, Text, Button, ActivityIndicator, Alert } from "react-native";
import * as Location from "expo-location";
import * as Permission from "expo-permissions";

const LocationSelector = (props) => {
  const [location, setLocation] = useState();

  const verifyPermissions = async () => {
    const askPermission = await Permission.askAsync(Permission.LOCATION);
    if (askPermission.status !== "granted") {
      Alert.alert(
        "Permission Error",
        "You need to provide location permission",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };
  const getUserLocation = async () => {
    const isGranted = await verifyPermissions();
    if (isGranted) {
      try {
        const location = await Location.getCurrentPositionAsync({});
        console.log(location);
        setLocation(null);
      } catch (error) {
        Alert.alert(
          "Location Fetching",
          "Enable to fetch user location try locating in map",
          [{ text: "Okay" }]
        );
        console.log(error.message);
      }
    }
  };

  return (
    <View style={{ marginVertical: 16, alignItems: "center" }}>
      <View
        style={{
          marginBottom: 16,
          width: "100%",
          height: 150,
          borderColor: "#ccc",
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>No location chosen!</Text>
      </View>
      <Button title="Get User Location" onPress={getUserLocation} />
    </View>
  );
};

export default LocationSelector;
