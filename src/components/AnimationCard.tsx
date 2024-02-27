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
    backgroundColor: pressed.value ? 'orange' : '#265073',
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={gesture}>
        <View style={styles.cardContainer}>
          <Animated.View style={[styles.card, animatedStyles]} />
        </View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    width: SCREEN_WIDTH / 2, // Divide by the number of columns
    height: SCREEN_HEIGHT / 4, // Divide by the number of rows
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'black',
  },
  card: {
    height: 150,
    width: SCREEN_WIDTH / 2.5,
    backgroundColor: '#b58df1',
    borderRadius: 10,
  },
});

export default AnimationCard;
