import React from 'react';
import { Text,StyleSheet } from 'react-native';

function BodyText(props) {
    return (
        <Text style={{...styles.BodyText,...props.style}}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    BodyText:{
        fontFamily:'open-sans',
        fontSize:15
    }
})

export default BodyText;
