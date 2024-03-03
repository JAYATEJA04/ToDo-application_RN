import React from 'react';
import {View, StyleSheet, Dimensions, Alert} from 'react-native';
import Animate from './src/components/AnimationCard';
import RenderCard from './src/components/Animated/RenderCards';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Grid from './src/components/Animated/GridLayout';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      {/* 1. */}
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.space1} />
          <View
            style={{
              width: SCREEN_WIDTH / 2,
              height: SCREEN_HEIGHT / 4,
              zIndex: 2,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Animate />
          </View>
          <View style={styles.space2} />
          <View
            style={{
              width: SCREEN_WIDTH / 2,
              height: SCREEN_HEIGHT / 4,
              zIndex: 2,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              left: SCREEN_WIDTH / 2,
            }}>
            <Animate />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.space3}>{/* <Animate /> */}</View>
          <View style={styles.space4}>{/* <Animate /> */}</View>
        </View>
        <View style={styles.row}>
          <View style={styles.space5} />
          <View style={styles.space6} />
        </View>
        <View style={styles.row}>
          <View style={styles.space7} />
          <View style={styles.space8} />
        </View>
      </View>

      {/* 2. */}
      {/* <Animate /> */}

      {/* 3. */}
      {/* <Grid /> */}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    zIndex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  space1: {
    width: SCREEN_WIDTH / 2,
    height: SCREEN_HEIGHT / 4,
    borderWidth: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'orange',
    // opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  space2: {
    width: SCREEN_WIDTH / 2,
    height: SCREEN_HEIGHT / 4,
    borderWidth: 1,
    position: 'absolute',
    top: 0,
    left: SCREEN_WIDTH / 2,
    backgroundColor: 'violet',
    // opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  space3: {
    // width: SCREEN_WIDTH / 2,
    // height: SCREEN_HEIGHT / 4,
    width: 300,
    height: 400,
    // zIndex: 1,
    borderWidth: 1,
    position: 'absolute',
    top: SCREEN_HEIGHT / 4,
    left: 0,
    backgroundColor: 'red',
    // opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  space4: {
    width: SCREEN_WIDTH / 2,
    height: SCREEN_HEIGHT / 4,
    borderWidth: 1,
    position: 'absolute',
    top: SCREEN_HEIGHT / 4,
    left: SCREEN_WIDTH / 2,
    // zIndex: 2,
    backgroundColor: '#51829B',
    // opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  space5: {
    width: SCREEN_WIDTH / 2,
    height: SCREEN_HEIGHT / 4,
    borderWidth: 1,
    position: 'absolute',
    top: (2 * SCREEN_HEIGHT) / 4,
    left: 0,
    // zIndex: 2,
    backgroundColor: '#59D5E0',
    // opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  space6: {
    width: SCREEN_WIDTH / 2,
    height: SCREEN_HEIGHT / 4,
    borderWidth: 1,
    position: 'absolute',
    top: (2 * SCREEN_HEIGHT) / 4,
    // right: 0,
    left: SCREEN_WIDTH / 2,
    // zIndex: 2,
    backgroundColor: '#FFBE98',
    // opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  space7: {
    width: SCREEN_WIDTH / 2,
    height: SCREEN_HEIGHT / 4,
    borderWidth: 1,
    position: 'absolute',
    top: (3 * SCREEN_HEIGHT) / 4,
    left: 0,
    // zIndex: 1,
    backgroundColor: '#BFEA7C',
    // opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  space8: {
    width: SCREEN_WIDTH / 2,
    height: SCREEN_HEIGHT / 4,
    borderWidth: 1,
    position: 'absolute',
    top: (3 * SCREEN_HEIGHT) / 4,
    // right: 0,
    left: SCREEN_WIDTH / 2,
    // zIndex: 2,
    backgroundColor: '#BBE2EC',
    // opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
