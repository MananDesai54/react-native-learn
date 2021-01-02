import React from 'react';
import { Text,StyleSheet } from 'react-native';

function TitleText(props) {
    return (
        <Text style={{...styles.TitleText,...props.style}}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    TitleText:{
        fontFamily:'open-sans-bold',
        fontSize:30
    }
})

export default TitleText;
