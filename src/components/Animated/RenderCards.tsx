import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Button,
  Dimensions,
  Alert,
} from 'react-native';
import Animate from '../Animation';

const {width} = Dimensions.get('window');
const padding = 10;
const numberOfColumns = 2;
const boxSize = (width - padding * (numberOfColumns + 1)) / numberOfColumns;

interface BoxItem {
  key: number;
}

const RenderCard = () => {
  const [boxes, setBoxes] = useState<BoxItem[]>([]);

  const addBoxes = () => {
    if (boxes.length >= 2) {
      Alert.alert('Nope!');
    } else {
      setBoxes(prevBoxes => [...prevBoxes, {key: prevBoxes.length}]);
    }
  };

  const renderItem = ({item}: {item: BoxItem}) => {
    return (
      <View style={styles.box}>
        <Animate />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={boxes}
        renderItem={renderItem}
        keyExtractor={item => item.key.toString()}
        numColumns={numberOfColumns}
      />
      <Button title="Add box" onPress={addBoxes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: padding,
  },
  box: {
    width: boxSize,
    height: boxSize,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    marginBottom: padding,
    marginRight: padding,
  },
});

export default RenderCard;
