import React, { useState } from "react";
import { Text, View, Button, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const ImageSelector = (props) => {
  const [imageUri, setImageUri] = useState();

  const verifyPermission = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA);
    if (result.status !== "granted") {
      Alert.alert("Permission", "You need to provide camera permission", [
        { text: "Okay" },
      ]);
      return false;
    }
    return true;
  };

  const takeImage = async () => {
    const isGranted = await verifyPermission();
    if (isGranted) {
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });
      setImageUri(image.uri);
      props.onImageTaken(image.uri);
    }
  };

  return (
    <View style={{ alignItems: "center", marginVertical: 10 }}>
      <View
        style={{
          width: "100%",
          height: 200,
          marginBottom: 10,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "#ccc",
          borderWidth: 1,
        }}
      >
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Text>No Image Picked</Text>
        )}
      </View>
      <Button title="Take Image" onPress={takeImage} />
    </View>
  );
};

export default ImageSelector;
