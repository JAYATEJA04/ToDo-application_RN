/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  FlatList,
  Alert,
} from 'react-native';
import Task from './TaskItem';

const MainUI = () => {
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
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          placeholder="Add your new task...."
          placeholderTextColor={'grey'}
          style={styles.formInput}
          value={newTask}
          onChangeText={txt => setNewTask(txt)}
        />
      </View>
      <View
        style={{padding: 10, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.createTaskButton}
          onPress={handleCreateButtonPress}>
          <Text>Create Task</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasksList}
        renderItem={({item, index}) => (
          <Task item={item} index={index} onDelete={deleteTaskPress} />
        )}
        key={'_'}
        keyExtractor={index => '_' + index.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // alignItems: 'center',
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
    elevation: 10,
    borderRadius: 20,
    backgroundColor: '#1640D6',
  },
});

export default MainUI;
