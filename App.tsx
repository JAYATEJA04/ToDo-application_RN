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
} from 'react-native';

const App = () => {
  const [newTask, setNewTask] = useState('');
  const [createButtonState, setCreateButtonState] = useState(false);

  const handleCreateButtonPress = () => {
    setCreateButtonState(true);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={{color: 'pink'}}>Hello world</Text> */}
      <TextInput
        placeholder="Enter new task"
        placeholderTextColor={'black'}
        style={styles.formInput}
        value={newTask}
        onChangeText={txt => setNewTask(txt)}
      />
      <TouchableOpacity
        style={styles.createTaskButton}
        onPress={handleCreateButtonPress}>
        <Text>Create Task</Text>
      </TouchableOpacity>
      <View style={{top: 10}}>
        {createButtonState ? (
          <View>
            <Text style={{color: 'white'}}>hi</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    top: 10,
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
