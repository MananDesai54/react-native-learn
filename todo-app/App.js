import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import TaskItems from "./components/TaskItems";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [tasks, addTask] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTaskHandle = (task) => {
    const newTasks = [
      ...tasks,
      {
        id: Math.random().toString(),
        value: task,
      },
    ];
    task.trim() !== "" ? addTask(newTasks) : "";
    setIsAddMode(false);
  };

  const deleteTask = (id) => {
    addTask((tasks) => {
      return tasks.filter((task) => task.id !== id);
    });
  };

  return (
    <View>
      <View style={styles.screen}>
        <Button title="Add more tasks" onPress={() => setIsAddMode(true)} />
        <TaskInput
          setVisible={() => {
            setIsAddMode(false);
          }}
          visible={isAddMode}
          addTaskHandle={addTaskHandle}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={tasks}
          renderItem={(itemData) => (
            <TaskItems
              onDelete={deleteTask}
              title={itemData.item.value}
              id={itemData.item.id}
            />
          )}
        />
        {/* <ScrollView>
          {tasks.map((task,index)=>(
            <View style={styles.tasks} key={index}>
              <Text>{task}</Text>
              <Button style={styles.deleteBtn} color="red" title="Delete" onPress={()=>{deleteTask(task)}} />
            </View>
          ))}
        </ScrollView> */}
        {/* <StatusBar style="auto" /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  button: {},
});
