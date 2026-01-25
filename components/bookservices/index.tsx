import React, { useState, useRef, useCallback } from 'react';
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

// 1. Define specific types for better safety
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

  // 2. Optimization: Use onViewableItemsChanged for accurate index tracking
  // This updates the dot exactly when the slide snaps into place
  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0 && viewableItems[0].index !== null) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  // Configuration for how much of the item needs to be visible to be "active"
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const renderItem: ListRenderItem<Slide> = ({ item }) => (
    <View style={styles.slideItem}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Slider */}
      <FlatList
        data={SLIDES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false} // Prevents overscrolling visual glitch
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        scrollEventThrottle={32} // Optimizes scroll event frequency
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
    // Optional: Add height constraints if needed
    paddingVertical: 20,
  },
  slideItem: {
    // 3. CRITICAL: The item container must be the same width as the screen
    // for pagingEnabled to work correctly.
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    // We make the image slightly smaller than screen width for a card look
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
  // Separating active/inactive styles makes logic clearer
  activeDot: {
    backgroundColor: '#333', // Darker for active
    width: 20, // Optional: Elongate the active dot for a modern look
  },
  inactiveDot: {
    backgroundColor: '#ccc', // Lighter for inactive
  },
});