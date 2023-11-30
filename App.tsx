/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  useColorScheme,
  View,
  FlatList,
  Alert,
} from 'react-native';
import Task from './src/components/TaskItem';

const App = () => {
  const [newTask, setNewTask] = useState('');
  const [tasksList, setTaskList] = useState([]);

  const isInputEmpty = newTask.trim() === '';

  const handleCreateButtonPress = () => {
    if (!isInputEmpty && tasksList.length < 10) {
      setTaskList(prevTasks => [...prevTasks, newTask]);
      setNewTask('');
    } else if (tasksList.length >= 10) {
      Alert.alert('prioritize tasks first');
    }
  };

  const deleteTaskPress = index => {
    setTaskList(prevTasks => {
      const updatedTaskList = [...prevTasks];
      updatedTaskList.splice(index, 1);
      return updatedTaskList;
    });
  };

  return (
    <View style={styles.container}>
      {/* <Text style={{color: 'pink'}}>Hello world</Text> */}
      <TextInput
        placeholder="Add your new task...."
        placeholderTextColor={'grey'}
        style={styles.formInput}
        value={newTask}
        onChangeText={txt => setNewTask(txt)}
      />
      <View style={{padding: 10}}>
        <TouchableOpacity
          style={styles.createTaskButton}
          onPress={handleCreateButtonPress}>
          <Text>Create Task</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          padding: 10,
          // justifyContent: 'center',
          alignItems: 'flex-start',
          // borderWidth: 1,
        }}>
        <FlatList
          data={tasksList}
          contentContainerStyle={
            {
              // justifyContent: 'center',
              // alignItems: 'center',
              // borderWidth: 1,
            }
          }
          style={{
            width: '100%',
            // borderWidth: 1,
          }}
          renderItem={({item, index}) => (
            <View style={{padding: 5}}>
              <Task item={item} index={index} onDelete={deleteTaskPress} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0F4FF',
  },
  formInput: {
    padding: 10,
    height: 70,
    width: '90%',
    elevation: 10,
    borderRadius: 10,
    backgroundColor: '#EEF5FF',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  createTaskButton: {
    padding: 10,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    elevation: 10,
    borderRadius: 20,
    backgroundColor: '#1640D6',
  },
});

export default App;
