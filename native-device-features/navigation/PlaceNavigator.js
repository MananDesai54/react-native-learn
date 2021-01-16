import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PlaceListScreen from "../screens/PlaceListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";

const Stack = createStackNavigator();

const PlaceNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PlaceList"
          options={{ title: "Places", headerRight: () => {} }}
          component={PlaceListScreen}
        />
        <Stack.Screen
          name="PlaceDetail"
          options={{ title: "Detail" }}
          component={PlaceDetailScreen}
        />
        <Stack.Screen
          name="NewPlace"
          options={{ title: "New" }}
          component={NewPlaceScreen}
        />
        <Stack.Screen
          name="Map"
          options={{ title: "Map" }}
          component={MapScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PlaceNavigator;
