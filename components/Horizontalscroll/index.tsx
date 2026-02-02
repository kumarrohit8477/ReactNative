import React from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  ListRenderItem,
  ImageStyle,
  ViewStyle,
} from 'react-native';

const { width } = Dimensions.get('window');

// ---------------- TYPES ----------------
export interface ImageItem {
  id: string;
  uri: string;
}

interface HorizontalImageScrollProps {
  data: ImageItem[];
  cardWidth?: number;
  cardHeight?: number;
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
}

// ---------------- COMPONENT ----------------
const HorizontalImageScroll: React.FC<HorizontalImageScrollProps> = ({
  data,
  cardWidth = width * 0.3,
  cardHeight = 100,
  containerStyle,
  imageStyle,
}) => {

  const renderItem: ListRenderItem<ImageItem> = ({ item }) => (
    <View style={[styles.cardContainer, { width: cardWidth, height: cardHeight }]}>
      <Image
        source={{ uri: item.uri }}
        style={[styles.image, imageStyle]}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={cardWidth + 15}
      />
    </View>
  );
};

export default HorizontalImageScroll;

// ---------------- STYLES ----------------
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  listContent: {
    paddingHorizontal: 10,
  },
  cardContainer: {
    marginRight: 15,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
