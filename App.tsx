import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animate from './src/components/Animation';
import RenderCard from './src/components/Animated/RenderCards';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <RenderCard />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
