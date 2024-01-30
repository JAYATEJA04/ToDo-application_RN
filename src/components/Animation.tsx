import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const Animate = () => {
  const pressed = useSharedValue(false);
  const translation = useSharedValue({x: 0, y: 0});

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange(event => {
      translation.value = {x: event.translationX, y: event.translationY};
    })
    .onFinalize(() => {
      translation.value = withSpring({x: 10, y: 10});
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {translateX: translation.value.x},
      {translateY: translation.value.y},
      {scale: withTiming(1)},
    ],
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
    padding: 5,
    // height: '100%',
  },
  circle: {
    height: 220,
    width: 180,
    backgroundColor: '#b58df1',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Animate;
