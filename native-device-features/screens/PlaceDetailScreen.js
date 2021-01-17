import React from "react";
import { View, Text } from "react-native";

const PlaceDetailScreen = (props) => {
  const place = props.route.params.place;

  return (
    <View>
      <Text>{place.title}</Text>
    </View>
  );
};

export default PlaceDetailScreen;
