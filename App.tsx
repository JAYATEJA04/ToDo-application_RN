import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animate from './src/components/AnimationCard';
import RenderCard from './src/components/Animated/RenderCards';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Grid from './src/components/Animated/GridLayout';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Animate />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // padding: 10,
  },
});

export default App;
