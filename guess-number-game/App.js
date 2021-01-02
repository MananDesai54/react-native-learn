import React, { useState } from 'react';
import { StyleSheet, View,StatusBar } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './Screen/StartGameScreen';
import GameScreen from './Screen/GameScreen';
import GameOver from './Screen/GameOver';
import * as Font from  'expo-font'; 
import { AppLoading } from 'expo';

const fetchFonts = async ()=>{
  await Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {

  // const [start,setStart] = useState(false);
  const [userChoice,setUserChoice] = useState();
  const [gameRound,setGameRound] = useState(0);

  const [dataLoaded,setDataLoaded] = useState(false);

  if(!dataLoaded) {
    return <AppLoading 
              startAsync={fetchFonts} 
              onFinish={()=>{
                setDataLoaded(true)
              }} onError={(err)=>{console.log(err)}} 
            />
  }

  const startGameHandler = number => {
    setUserChoice(number);
  }

  const configureNewGame = ()=>{
    setUserChoice(null);
    setGameRound(0);
  }

  const gameOverHandler = gameRounds => {
    setGameRound(gameRounds);
  }

  let screen = <StartGameScreen setUserChoice={startGameHandler} />
  if(userChoice && gameRound<=0) {
    screen = <GameScreen userChoice={userChoice} onGameOver={gameOverHandler} />
  }else if(gameRound>0) {
    screen = <GameOver rounds={gameRound} userGuess={userChoice} newGame={configureNewGame} />
  }

  return (
    <View style={styles.screen} >
      <StatusBar  barStyle="default" translucent={true} backgroundColor="rgba(0,0,0,0.5)" />
      <Header title="Guess a Number" />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
