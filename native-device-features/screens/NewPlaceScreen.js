import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { PlaceContext } from "../context/PlaceContext";

const PlaceListScreen = (props) => {
  const [title, setTitle] = useState();
  const context = useContext(PlaceContext);

  const addPlaceHandler = () => {
    context.addPlace({ title });
    props.navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Title</Text>
      <TextInput
        style={{
          padding: 8,
          marginBottom: 8,
          borderBottomColor: "gray",
          borderBottomWidth: 1,
        }}
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Add Place" onPress={addPlaceHandler} />
    </View>
  );
};

export default PlaceListScreen;
