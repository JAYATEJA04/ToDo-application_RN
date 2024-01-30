/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MainUI from './src/components/MainUI';
import Animate from './src/components/Animation';

const App = () => {
  const [animateBox, setAnimateBox] = useState([]);

  const handlePress = () => {
    setAnimateBox(prev => [...prev, animateBox]);
  };
  const count = 0;

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          height: 50,
          width: 80,
          borderWidth: 1,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'lightblue',
        }}
        onPress={handlePress}>
        <Text style={{color: 'black'}}>Click me</Text>
      </TouchableOpacity>
      <FlatList
        data={animateBox}
        renderItem={() => <Animate boxId={count} />}
        key={'_'}
        keyExtractor={index => '_' + index.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default App;
