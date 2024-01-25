import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Task = ({item, index, onDelete}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.TaskTextView}>
        <Text style={styles.TaskText}>{item}</Text>
      </View>
      <View style={styles.DeleteButtonView}>
        <TouchableOpacity
          style={styles.DeleteButton}
          onPress={() => onDelete(index)}>
          <Icon name="trash" size={20} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 'auto',
    padding: 5,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#FBECB2',
    flexDirection: 'row',
    elevation: 3,
  },
  TaskTextView: {
    flex: 5,
    height: 'auto',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  TaskText: {
    color: 'black',
    fontSize: 15,
  },
  DeleteButtonView: {
    flex: 1,
  },
  DeleteButton: {
    elevation: 10,
    backgroundColor: '#7B66FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
});

export default Task;
