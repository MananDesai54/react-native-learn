import React, { useContext } from "react";
import { FlatList } from "react-native";
import PlaceItem from "../components/PlaceItem";
import { PlaceContext } from "../context/PlaceContext";

const PlaceListScreen = (props) => {
  const context = useContext(PlaceContext);
  return (
    <FlatList
      data={context.place}
      renderItem={(itemData) => (
        <PlaceItem
          place={itemData.item}
          onSelect={() =>
            props.navigation.navigate("PlaceDetail", { place: itemData.item })
          }
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default PlaceListScreen;
