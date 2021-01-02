import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import BodyText from "../Components/BodyText";
import TitleText from "../Components/TitleText";
import Colors from "../constants/colors";
import ButtonComponent from "../Components/ButtonComponent";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText style={{ fontSize: 30 }}>Game Over</TitleText>
      {/* <Image 
                style={styles.image} 
                source={require('../assets/images/fullstack.png')} 
                resizeMode="cover"
            /> */}
      <Image
        style={styles.image}
        source={{
          uri:
            "https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg",
        }}
        resizeMode="cover"
        fadeDuration={500}
      />
      <BodyText
        style={{
          fontSize: 20,
          marginVertical: 10,
          marginHorizontal: 50,
          textAlign: "center",
        }}
      >
        Your phone took <Text style={styles.highlight}>{props.rounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{props.userGuess}</Text>
      </BodyText>
      <ButtonComponent
        style={{
          marginVertical: 10,
          backgroundColor: "#333",
          paddingVertical: 20,
          paddingHorizontal: 20,
          borderRadius: 30,
        }}
        onPress={props.newGame}
      >
        Play Again
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 300,
    width: 300,
    marginVertical: 10,
    borderRadius: 150,
  },
  highlight: {
    color: "red",
  },
});

export default GameOver;
