import React,{ useState } from 'react';
import { Button,TextInput,View,StyleSheet,Modal } from 'react-native';

const TaskInput = ({ addTaskHandle,visible,setVisible })=>{

    const [task,setTasks] = useState('');
    const handleChange = (enteredText) =>{
        setTasks(enteredText);
    }

    return (
        <Modal 
            visible={visible}
            animationType='slide'
        >
            <View style={styles.addContainer}>
                <TextInput placeholder="Add task" style={styles.textInput} value={task} onChangeText={handleChange} />
                <View style={styles.btns}>
                    <View style={styles.btn}>
                        <Button title="Add" style={styles.button} onPress={/*addTaskHandle.bind(this,task)*/()=>{
                            addTaskHandle.call(this,task);
                            setTasks('');
                        }} />
                    </View>
                    <View style={styles.btn}>
                        <Button style={styles.btn} title='Cancel' color='red' onPress={()=>{setVisible()}} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    addContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      },
    textInput:{
        borderColor:'black',
        borderWidth:1,
        padding:5,
        width:'80%',
        marginBottom:10
    },
    btns:{
        flexDirection:'row',
        width:'80%',
        justifyContent:'flex-end'
    },
    btn:{
        width:'30%',
        marginLeft:5
    }
})

export default TaskInput;