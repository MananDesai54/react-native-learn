import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ImageSelector from "../components/ImageSelector";
import { PlaceContext } from "../context/PlaceContext";

const PlaceListScreen = (props) => {
  const [title, setTitle] = useState();
  const [imageUri, setImageUri] = useState();
  const context = useContext(PlaceContext);

  const addPlaceHandler = () => {
    context.addPlace({ title, imageUri });
    props.navigation.goBack();
  };

  const imageTaken = (uri) => {
    setImageUri(uri);
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
      <ImageSelector onImageTaken={imageTaken} />
      <Button title="Add Place" onPress={addPlaceHandler} />
    </View>
  );
};

export default PlaceListScreen;
