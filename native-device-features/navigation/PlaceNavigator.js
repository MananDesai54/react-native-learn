import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PlaceListScreen from "../screens/PlaceListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const Stack = createStackNavigator();

const PlaceNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PlaceList"
          component={PlaceListScreen}
          options={(navData) => {
            return {
              title: "Places",
              headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item
                    title="Add"
                    iconName="md-add"
                    onPress={() => navData.navigation.navigate("NewPlace")}
                  />
                </HeaderButtons>
              ),
            };
          }}
        />
        <Stack.Screen
          name="PlaceDetail"
          component={PlaceDetailScreen}
          options={(navData) => ({ title: navData.route.params.place.title })}
        />
        <Stack.Screen
          name="NewPlace"
          component={NewPlaceScreen}
          options={{ title: "Add Place" }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "Map" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PlaceNavigator;
