/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, Text, View, FlatList, SafeAreaView} from 'react-native';
import MainUI from './src/components/MainUI';
import Animate from './src/components/Animation';

const App = () => {
  const [animateBox, setAnimateBox] = useState([]);

  const handlePress = () => {
    setAnimateBox(prev => [...prev, animateBox]);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button title="Click here" onPress={handlePress}/>
      <FlatList
        data={animateBox}
        renderItem={() => <Animate />}
        key={'_'}
        keyExtractor={index => '_' + index.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default App;
