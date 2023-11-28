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
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  const [newTask, setNewTask] = useState('');
  const [tasksList, setTaskList] = useState([]);

  const isInputEmpty = newTask.trim() === '';

  const handleCreateButtonPress = () => {
    if (!isInputEmpty) {
      setTaskList(prevTasks => [...prevTasks, newTask]);
      setNewTask('');
    }
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
          renderItem={({item}) => (
            <View style={{padding: 5}}>
              <Task value={item} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const Task = taskItem => {
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        height: 60,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#E0F4FF',
        flexDirection: 'row',
      }}>
      {/* <Text style={{color: 'black'}}>{taskItem.value}</Text> */}
      <Icon name="heart" size={40} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formInput: {
    padding: 10,
    height: 70,
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#EEF5FF',
    color: 'black',
    fontSize: 20,
  },
  createTaskButton: {
    padding: 10,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#5FBDFF',
  },
});

export default App;
