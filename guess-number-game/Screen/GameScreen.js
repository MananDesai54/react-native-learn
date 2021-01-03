import React, { useState, useEffect, useRef, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import NumberContainer from "../Components/NumberComponent";
import Card from "../Components/Card";
import TitleText from "../Components/TitleText";
import ButtonComponent from "../Components/ButtonComponent";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

function generateRandom(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandom(min, max, exclude);
  } else {
    return randomNum;
  }
}

const GameScreen = (props) => {
  const initGuess = generateRandom(1, 99, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initGuess);
  // const [gameRound,setGameRound] = useState(0);
  const [previousGuess, setPreviousGuess] = useState([initGuess]);
  const currentMin = useRef(1);
  const currentMax = useRef(100);

  const [width, setWidth] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const updateOrientation = () => {
      setWidth(Dimensions.get("window").width);
    };

    Dimensions.addEventListener("change", updateOrientation);
    return () => {
      Dimensions.removeEventListener("change", updateOrientation);
    };
  }, [width]);

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(previousGuess.length);
    }
  }, [currentGuess, props.onGameOver, props.userChoice]);
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      return Alert.alert("Don't Lie", `You know it's already ${direction}`, [
        { text: "Sorry", style: "cancel" },
      ]);
    } else if (direction === "lower") {
      currentMax.current = currentGuess;
    } else {
      currentMin.current = currentGuess + 1;
    }

    const guess = generateRandom(
      currentMin.current,
      currentMax.current,
      currentGuess
    );
    setCurrentGuess(guess);
    setPreviousGuess((previousGuess) => [guess, ...previousGuess]);
    // setGameRound(curRound=>curRound+1);
  };

  let layout = (
    <>
      <NumberContainer number={currentGuess} />
      <Card style={styles.buttons}>
        <ButtonComponent
          style={{ backgroundColor: "#333" }}
          onPress={() => {
            nextGuessHandler("lower");
          }}
        >
          <Ionicons name="md-remove" size={24} color="white" />
        </ButtonComponent>
        <ButtonComponent
          style={{ backgroundColor: "#333" }}
          onPress={() => {
            nextGuessHandler("greater");
          }}
        >
          <Ionicons name="md-add" size={24} color="white" />
        </ButtonComponent>
      </Card>
    </>
  );

  if (width > 600) {
    layout = (
      <View style={styles.big}>
        <ButtonComponent
          style={{ backgroundColor: "#333" }}
          onPress={() => {
            nextGuessHandler("lower");
          }}
        >
          <Ionicons name="md-remove" size={24} color="white" />
        </ButtonComponent>
        <NumberContainer
          number={currentGuess}
          style={{ marginHorizontal: 10 }}
        />
        <ButtonComponent
          style={{ backgroundColor: "#333" }}
          onPress={() => {
            nextGuessHandler("greater");
          }}
        >
          <Ionicons name="md-add" size={24} color="white" />
        </ButtonComponent>
      </View>
    );
  }

  return (
    <Fragment>
      <ScrollView>
        <View style={styles.screen}>
          <TitleText>User's Current Guess</TitleText>
          {layout}
        </View>
        <FlatList
          keyExtractor={(item) => item.toString()}
          contentContainerStyle={styles.scroll}
          data={previousGuess}
          renderItem={({ item }) => (
            <View style={styles.guesses}>
              <Text style={styles.guessText}>{item}</Text>
            </View>
          )}
        />
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  big: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    width: 300,
    maxWidth: "90%",
    justifyContent: "space-around",
    marginVertical: Dimensions.get("window").height > 600 ? 20 : 10,
  },
  guess: {
    flex: 1,
  },
  guesses: {
    width: 200,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 5,
    borderColor: colors.ACCENT,
    borderWidth: 2,
    backgroundColor: "white",
    justifyContent: "center",
  },
  guessText: {
    textAlign: "center",
  },
  guess: {
    color: colors.ACCENT,
  },
  scroll: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexGrow: 1,
  },
});

export default GameScreen;
