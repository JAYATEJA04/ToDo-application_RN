import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Button} from 'react-native';
import Animate from '../Animation';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const RenderCard = () => {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState('1');

  const handleButtonPress = () => {
    if (cards.length < 10) {
      setCards(prevCards => [...prevCards, card]);
    }
  };

  return (
    <View>
      <Button onPress={handleButtonPress} title="Create card" />
      <FlatList
        data={cards}
        renderItem={({item}) => (
          <View>
            <Animate />
          </View>
        )}
        key={'_'}
        keyExtractor={index => '_' + index.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default RenderCard;
