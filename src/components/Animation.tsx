import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';
import {
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
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        <View style={styles.ball} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  ball: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
  },
});

export default Animate;
import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  useEvent,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';

const Animate = () => {
  const translationX1 = useSharedValue(0);
  const translationY1 = useSharedValue(0);
  const translationX2 = useSharedValue(0);
  const translationY2 = useSharedValue(0);

  const box1Style = useAnimatedStyle(() => ({
    transform: [
      {translateX: translationX1.value},
      {translateY: translationY1.value},
    ],
  }));

  const box2Style = useAnimatedStyle(() => ({
    transform: [
      {translateX: translationX2.value},
      {translateY: translationY2.value},
    ],
  }));

  const onGestureEvent1 = Animated.event([
    {nativeEvent: {translationX: translationX1, translationY: translationY1}},
    {useNativeDriver: false},
  ]);

  const onGestureEvent2 = Animated.event([
    {nativeEvent: {translationX: translationX2, translationY: translationY1}},
    {useNativeDriver: false},
  ]);

  const onRelease1 = ({nativeEvent}) => {
    if (nativeEvent.state === State.END) {
      translationX1.value = withSpring(0);
      translationY1.value = withSpring(0);
    }
  };

  const onRelease2 = ({nativeEvent}) => {
    if (nativeEvent.state === State.END) {
      translationX2.value = withSpring(0);
      translationY2.value = withSpring(0);
    }
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler
        onGestureEvent={onGestureEvent1}
        onHandlerStateChange={onRelease1}>
        <Animated.View style={[styles.circle, box1Style]} />
      </PanGestureHandler>
      <PanGestureHandler
        onGestureEvent={onGestureEvent2}
        onHandlerStateChange={onRelease2}>
        <Animated.View style={[styles.circle, box2Style]} />
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    height: '100%',
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
