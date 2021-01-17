import React, { Fragment } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const PlaceItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onSelect}
      style={styles.placeItem}
    >
      <Fragment>
        <Image style={styles.image} source={{ uri: props.place.imageUri }} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{props.place.title}</Text>
          <Text style={styles.address}>{props.place.address}</Text>
        </View>
      </Fragment>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ccc",
    borderColor: "#666",
    borderWidth: 1,
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "black",
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    color: "#666",
    fontSize: 16,
  },
});

export default PlaceItem;
