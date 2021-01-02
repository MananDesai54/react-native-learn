import React from 'react';
import { View,StyleSheet } from 'react-native';

const Card = props=>{
    return (
        <View style={{...styles.card,...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowRadius:6,
        shadowOpacity:0.5,
        elevation:10,
        backgroundColor:'#fff',
        padding:20,
        borderRadius:10,
        marginVertical:10
    }
});

export default Card;