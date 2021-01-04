import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FavoriteScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Favorite</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoriteScreen;
