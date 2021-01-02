import React,{ useState, Fragment } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import Card from '../Components/Card';
import Colors from '../constants/colors';
import Input from '../Components/Input';
import NumberComponent from '../Components/NumberComponent';
import BodyText from '../Components/BodyText';
import TitleText from '../Components/TitleText';
import ButtonComponent from '../Components/ButtonComponent';

const StartGameScreen = props => {

    const [enteredValue,setEnteredValue] = useState('');
    const [confirmed,setConfirmed] = useState(false);
    const [selectedNumber,setSelectedNumber] = useState();
    
    const numberInputHandler = inputText =>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    }

    const resetInputHandler = ()=>{
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = ()=>{
        const chosenNumber = +enteredValue;
        if(isNaN(chosenNumber) || enteredValue<=0 || enteredValue>99) {
            Alert.alert('Invalid Number','Number has to be between 1-99',[
                {text:'Okay',style:'destructive',onPress:resetInputHandler}
            ])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(+enteredValue);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    const confirmedNumber = confirmed 
                ?<Card style={styles.selectedContainer}>
                    <TitleText>You selected</TitleText>
                    <NumberComponent number={selectedNumber} />
                    <ButtonComponent 
                        style={{backgroundColor:Colors.ACCENT,paddingHorizontal:15}}
                        onPress={()=>{
                            props.setUserChoice(selectedNumber);
                        }} >
                        START GAME
                    </ButtonComponent>
                </Card> 
                :<Fragment></Fragment>;

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss()
        }}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start new Game!</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a Number</BodyText>
                    <Input 
                        style={styles.inputBox} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType="number-pad" 
                        maxLength={2}
                        value={enteredValue}
                        onChangeText={numberInputHandler}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.btn}>
                            <ButtonComponent 
                                style={{backgroundColor:Colors.ACCENT}}
                                onPress={()=>{resetInputHandler()}}
                            >Reset</ButtonComponent>
                        </View>
                        <View style={styles.btn}>
                            <ButtonComponent 
                                style={{backgroundColor:Colors.PRIMARY,color:Colors.ACCENT}} 
                                onPress={()=>{confirmInputHandler()}}  
                            >Confirm</ButtonComponent>
                        </View>
                    </View>
                </Card>
                {confirmedNumber}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        padding:10
    },
    title:{
        fontSize:30,
        marginVertical:10,
        fontFamily:'open-sans-bold'
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    },
    inputBox : {
        width:80,
        textAlign:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-evenly',
        paddingHorizontal:15,
        marginVertical:10
    },
    btn:{
        width:'45%'
    },
    selectedContainer:{
        marginTop:10,
        alignItems:'center'
    }
});

export default StartGameScreen;