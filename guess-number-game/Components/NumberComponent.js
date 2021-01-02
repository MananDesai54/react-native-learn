import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const NumberComponent = props =>{
    return (
        <View style={styles.numberCont}>
            <Text style={styles.number}>{props.number}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    numberCont:{
        alignItems:'center',
        marginVertical:10,
        backgroundColor:Colors.ACCENT,
        borderRadius:60,
        padding:10
    },
    number:{
        color:Colors.PRIMARY,
        fontSize:30
    }
});

export default NumberComponent;