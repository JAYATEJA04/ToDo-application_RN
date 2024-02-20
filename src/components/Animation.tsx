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

const GRID_SIZE = 200;

const Animate = () => {
  const pressed = useSharedValue(false);
  const initialX = useSharedValue(0);
  const initialY = useSharedValue(0);
  const offsetX = useRef(useSharedValue(0)).current;
  const offsetY = useRef(useSharedValue(0)).current;

  const gesture = useRef(
    Gesture.Pan()
      .onBegin(() => {
        pressed.value = true;
      })
      .onChange(event => {
        offsetX.value = event.translationX;
        offsetY.value = event.translationY;
      })
      .onFinalize(() => {
        pressed.value = false;
        offsetX.value = initialX.value;
        offsetY.value = initialY.value;
      }),
  ).current;

  useEffect(() => {
    initialX.value = 0;
    initialY.value = 0;
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {translateX: withSpring(offsetX.value)},
      {translateY: withSpring(offsetY.value)},
      {scale: withTiming(pressed.value ? 1.2 : 1)},
    ],
    backgroundColor: pressed.value ? 'orange' : 'yellow',
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.circle, animatedStyles]} />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
  },
  circle: {
    height: 220,
    width: 170,
    backgroundColor: '#b58df1',
    borderRadius: 10,
  },
});

export default Animate;
