/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, Text, View, FlatList, SafeAreaView} from 'react-native';
import MainUI from './src/components/MainUI';
import Animate from './src/components/Animation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Animate />
    </View>
  );
};

export default App;
