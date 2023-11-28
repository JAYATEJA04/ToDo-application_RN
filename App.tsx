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
import Icon from 'react-native-vector-icons/FontAwesome6';

const App = () => {
  const [newTask, setNewTask] = useState('');
  const [tasksList, setTaskList] = useState([]);

  const isInputEmpty = newTask.trim() === '';

  const handleCreateButtonPress = () => {
    if (!isInputEmpty && tasksList.length < 10) {
      setTaskList(prevTasks => [...prevTasks, newTask]);
      setNewTask('');
    } else {
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

const Task = ({item, index, onDelete}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 'auto',
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#E0F4FF',
        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: 5,
          height: 'auto',
          // borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <Text style={{color: 'black', fontSize: 20}}>{item}</Text>
      </View>
      <View
        style={{
          flex: 1,
          padding: 5,
          // borderWidth: 1,
        }}>
        <TouchableOpacity
          style={{
            elevation: 10,
            backgroundColor: '#7B66FF',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
          }}
          onPress={() => onDelete(index)}>
          <Icon name="trash" size={30} color={'black'} />
        </TouchableOpacity>
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
