import React, { useState,useEffect, useRef } from 'react';
import { View,Text,StyleSheet, Button, Alert, ScrollView } from 'react-native';
import NumberContainer from '../Components/NumberComponent';
import Card from '../Components/Card';
import TitleText from '../Components/TitleText';
import ButtonComponent from '../Components/ButtonComponent';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

function generateRandom(min,max,exclude) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random()*(max-min))+min;
    if(randomNum === exclude) {
        return generateRandom(min,max,exclude);
    } else {
        return randomNum;
    }
}

const GameScreen = props => {

    const initGuess = generateRandom(1,99,props.userChoice);
    const [currentGuess,setCurrentGuess] = useState(initGuess);
    // const [gameRound,setGameRound] = useState(0);
    const [previousGuess,setPreviousGuess] = useState([initGuess]);
    const currentMin = useRef(1);
    const currentMax = useRef(100);

    useEffect(()=>{
        if(currentGuess === props.userChoice) {
            props.onGameOver(previousGuess.length);
        }
    },[currentGuess,props.onGameOver,props.userChoice]);
    const nextGuessHandler = direction =>{
        if((direction === 'lower' && currentGuess<props.userChoice) || (direction === 'greater' && currentGuess>props.userChoice)) {
            return Alert.alert("Don't Lie",`You know it's already ${direction}`,[
                {text:'Sorry',style:'cancel'}
            ])
        }else if(direction==='lower'){
            currentMax.current = currentGuess;
        }else {
            currentMin.current = currentGuess+1;

        }

        const guess = generateRandom(currentMin.current,currentMax.current,currentGuess)
        setCurrentGuess(guess);
        setPreviousGuess(previousGuess=>[guess,...previousGuess]);
        // setGameRound(curRound=>curRound+1);
    }

    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>User's Current Guess</TitleText> 
                <NumberContainer number={currentGuess} />
                <Card style={styles.buttons}>
                    <ButtonComponent 
                        style={{backgroundColor:'#333'}} 
                        onPress={()=>{nextGuessHandler('lower')}}
                    >
                        <Ionicons name="md-remove" size={24} color='white' />
                    </ButtonComponent>
                    <ButtonComponent 
                        style={{backgroundColor:'#333'}}
                        onPress={()=>{nextGuessHandler('greater')}}
                    >
                        <Ionicons name="md-add" size={24} color='white' />
                    </ButtonComponent>
                </Card>
                <View style={styles.guess}>
                    <ScrollView>
                        {previousGuess.map(guess=>(
                            <View style={styles.guesses} key={guess}>
                                <Text style={styles.guessText}>{guess}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center'
    },
    buttons:{
        flexDirection:'row',
        width:300,
        maxWidth:'90%',
        justifyContent:'space-around',
        marginVertical:10
    },
    guess:{
        flex:1
    },
    guesses:{
        paddingHorizontal:100,
        paddingVertical:15,
        borderRadius:10,
        marginVertical:5,
        borderColor:colors.ACCENT,
        borderWidth:2,
        backgroundColor:'white'
    },
    guess :{
        color:colors.ACCENT
    }
})

export default GameScreen;
