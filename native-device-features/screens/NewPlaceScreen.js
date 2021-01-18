import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import ImageSelector from "../components/ImageSelector";
import LocationSelector from "../components/LocationSelector";
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
    <ScrollView>
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
        <LocationSelector />
        <Button title="Add Place" onPress={addPlaceHandler} />
      </View>
    </ScrollView>
  );
};

export default PlaceListScreen;
