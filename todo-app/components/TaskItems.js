import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Touchable,TouchableHighlight,TouchableNativeFeedback,TouchableWithoutFeedback } from 'react-native';

const TaskItems = props => {
    return (
        // <TouchableOpacity activeOpacity={0.7} onPress={props.onDelete}>
        // <TouchableHighlight activeOpacity={0.5} onPress={props.onDelete}>
        // <TouchableWithoutFeedback>
        <TouchableNativeFeedback onPress={props.onDelete.bind(this,props.id)}>
            <View style={styles.tasks}>
                <Text>{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
        // </TouchableWithoutFeedback>
        // </TouchableHighlight>
        // </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tasks:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10,
        padding:5,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:1
      }
})

export default TaskItems;
