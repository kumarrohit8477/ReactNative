import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  ListRenderItem,
  ViewToken,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface Slide {
  id: string;
  image: any;
}

const SLIDES: Slide[] = [
  { id: '1', image: require('@/assets/images/acs.png') },
  { id: '2', image: require('@/assets/images/ryf.png') },
  { id: '3', image: require('@/assets/images/sybd.png') },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<Slide>>(null);

  // 🔹 Track visible item (for dots)
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setCurrentIndex(viewableItems[0].index);
      }
    }
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  // 🔹 AUTO SCROLL LOGIC
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        currentIndex === SLIDES.length - 1 ? 0 : currentIndex + 1;

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }, 2500); // ⏱️ 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem: ListRenderItem<Slide> = ({ item }) => (
    <View style={styles.slideItem}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={SLIDES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        scrollEventThrottle={32}
      />

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {SLIDES.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginTop: 20,
  },
  slideItem: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: SCREEN_WIDTH - 40,
    height: 200,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#333',
    width: 20,
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
});
