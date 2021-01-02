import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import BodyText from './BodyText';

const Header = props => {
    return (
        <View style={styles.header}>
            <BodyText style={styles.headerTitle}>{props.title}</BodyText>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:Colors.PRIMARY,
        width:'100%',
        height:90,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:25,
    },
    headerTitle:{
        color:Colors.ACCENT,
        fontSize:20,
        fontFamily:'open-sans'
    }
})

export default Header;