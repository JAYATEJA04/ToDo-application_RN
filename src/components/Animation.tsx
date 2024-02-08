import 'react-native-gesture-handler';
import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const GRID_SIZE = 120;

const Animate = () => {
  const pressed = useSharedValue(false);
  // highlight-next-line
  const initialX = useSharedValue(0);
  const initialY = useSharedValue(0);
  const offsetX = useRef(useSharedValue(0)).current;
  const offsetY = useRef(useSharedValue(0)).current;

  const snapToGrid = (value, gridSize) => {
    'worklet';
    return Math.round(value / gridSize) * gridSize;
  };

  const pan = useRef(
    Gesture.Pan()
      .onBegin(() => {
        pressed.value = true;
      })
      .onChange(event => {
        offsetX.value = initialX.value + event.translationX;
        offsetY.value = initialY.value + event.translationY;
      })
      .onFinalize(() => {
        pressed.value = false;
        initialX.value = snapToGrid(offsetX.value, GRID_SIZE);
        initialY.value = snapToGrid(offsetY.value, GRID_SIZE);
        offsetX.value = initialX.value;
        offsetY.value = initialY.value;
      }),
  ).current;

  useEffect(() => {
    // Reset initial position on each render
    initialX.value = 0;
    initialY.value = 0;
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      // highlight-next-line
      {translateX: withSpring(offsetX.value)},
      {translateY: withSpring(offsetY.value)},
      {scale: withTiming(pressed.value ? 1.1 : 1)},
    ],
    backgroundColor: pressed.value ? '#FFE04B' : '#b58df1',
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.circle, animatedStyles]} />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 10,
  },
  circle: {
    height: 220,
    width: 170,
    backgroundColor: '#b58df1',
    borderRadius: 10,
  },
});

export default Animate;
