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
import AnimationCard from '../AnimationCard';

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
    if (boxes.length >= 6) {
      Alert.alert('Nope!');
    } else {
      setBoxes(prevBoxes => [...prevBoxes, {key: prevBoxes.length}]);
    }
  };

  const renderItem = ({item}: {item: BoxItem}) => {
    return (
      <View style={styles.box}>
        <AnimationCard />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={boxes}
        renderItem={renderItem}
        style={{flex: 1}}
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
    borderWidth: 1,
  },
});

export default RenderCard;
