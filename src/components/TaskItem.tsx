import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Task = ({item, index, onDelete}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 'auto',
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#FBECB2',
        flexDirection: 'row',
        elevation: 3,
      }}>
      <View
        style={{
          flex: 5,
          height: 'auto',
          // borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <Text style={{color: 'black', fontSize: 15}}>{item}</Text>
      </View>
      <View
        style={{
          flex: 1,
          padding: 5,
          // borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            elevation: 10,
            backgroundColor: '#7B66FF',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
            height: 40,
            width: '70%',
          }}
          onPress={() => onDelete(index)}>
          <Icon name="trash" size={20} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Task;
