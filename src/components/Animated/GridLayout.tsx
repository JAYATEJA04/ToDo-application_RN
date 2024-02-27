import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import AnimationCard from '../AnimationCard';
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

const Grid: React.FC = () => {
  const pressed = useSharedValue(false);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const context = useSharedValue({x: 0, y: 0});
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {x: translateX.value, y: translateY.value};
    })
    .onUpdate(event => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    })
    .onEnd(() => {
      if (translateX.value > screenWidth / 2) {
        translateX.value = screenWidth / 2;
      } else if (translateY.value > screenHeight / 4) {
        translateY.value = screenHeight / 4;
      }
      pressed.value = false;
    });

  const renderSpace = (index: number) => {
    return (
      <View key={index} style={styles.space}>
        <GestureDetector gesture={gesture}>
          <AnimationCard />
        </GestureDetector>
      </View>
    );
  };
  return (
    <GestureDetector gesture={gesture}>
      <View style={styles.container}>
        <View style={styles.row}>
          {renderSpace(0)}
          {renderSpace(1)}
        </View>
        <View collapsable={false} style={styles.row}>
          <View style={styles.space} />
          <View style={styles.space} />
        </View>
        <View style={styles.row}>
          <View style={styles.space} />
          <View style={styles.space} />
        </View>
        <View style={styles.row}>
          <View style={styles.space} />
          <View style={styles.space} />
        </View>
      </View>
    </GestureDetector>
  );
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  space: {
    width: screenWidth / 2, // Divide by the number of columns
    height: screenHeight / 4, // Divide by the number of rows
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Grid;
