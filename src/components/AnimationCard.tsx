import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, Dimensions, Alert} from 'react-native';
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
const GRID_SIZE2 = 100;
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const AnimationCard = () => {
  const pressed = useSharedValue(false);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const context = useSharedValue({x: 0, y: 0});

  const snapToGrid = (value, gridSize) => {
    'worklet';
    return Math.floor(Math.round(value / gridSize) * gridSize);
  };

  const gesture = Gesture.Pan()
    .onStart(() => {
      pressed.value = true;
      context.value = {x: translateX.value, y: translateY.value};
    })
    .onUpdate(event => {
      context.value.x = event.translationX + translateX.value;
      context.value.y = event.translationY + translateY.value;
    })
    .onEnd(() => {
      pressed.value = false;
      translateX.value = snapToGrid(context.value.x, SCREEN_WIDTH / 2);
      translateY.value = snapToGrid(context.value.y, SCREEN_WIDTH / 2);
      context.value.x = translateX.value;
      context.value.y = translateX.value;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {translateX: withSpring(translateX.value)},
      {translateY: withSpring(translateY.value)},
      {scale: withTiming(pressed.value ? 1.1 : 1)},
    ],
    backgroundColor: '#0B60B0',
    borderWidth: 2,
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={gesture}>
        <View>
          <Animated.View style={[styles.card, animatedStyles]} />
        </View>
      </GestureDetector>
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <View style={styles.container}>
  //       <Animated.View style={[styles.card, animatedStyles]} />
  //     </View>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    // zIndex: 1,
  },
  cardContainer: {
    width: SCREEN_WIDTH / 2, // Divide by the number of columns
    height: SCREEN_HEIGHT / 4, // Divide by the number of rows
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  card: {
    height: SCREEN_HEIGHT / 6,
    width: SCREEN_WIDTH / 3,
    backgroundColor: '#b58df1',
    borderRadius: 10,
    // zIndex: 2,
  },
});

export default AnimationCard;
