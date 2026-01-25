import React, { memo } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  ImageSourcePropType,
  Pressable,
  ViewStyle,
  StyleProp,
} from 'react-native';

interface CardProps {
  title: string;
  image: ImageSourcePropType;
  onPress?: () => void;
  /** Optional style override for the outer container (e.g., margins, width) */
  style?: StyleProp<ViewStyle>;
}

const Card: React.FC<CardProps> = ({ title, image, onPress, style }) => {
  return (
    <View style={[styles.shadowContainer, style]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.innerContainer,
          // visual feedback for iOS
          pressed && Platform.OS === 'ios' && styles.pressed,
        ]}
        android_ripple={{ color: '#dddddd' }}
        accessibilityRole="button"
        accessibilityLabel={`View details for ${title}`}
      >
        {/* Image Section */}
        <View style={styles.imageWrapper}>
          <Image source={image} style={styles.image} resizeMode="cover" />
        </View>

        {/* Content Section */}
        <View style={styles.contentContainer}>
          <Text style={styles.titleText} numberOfLines={1}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default memo(Card);

const styles = StyleSheet.create({
  // 1. Outer container handles Dimensions & Shadows
  shadowContainer: {
    width: 115,
    height: 125,
    marginTop: 12,
    backgroundColor: 'transparent', // Important for shadow visibility

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    // Android shadow
    elevation: 5,
  },

  // 2. Inner container handles Border Radius & Overflow
  innerContainer: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: '#fff',
    overflow: 'hidden', // Clips the image to the border radius
  },

  // iOS Press Effect
  pressed: {
    opacity: 0.75,
  },

  imageWrapper: {
    flex: 1, // Takes up remaining space not used by contentContainer
  },

  image: {
    width: '100%',
    height: '100%',
  },

  contentContainer: {
    height: 36, // Fixed height prevents layout jumps if text is empty
    backgroundColor: 'rgba(91, 147, 140, 0.9)', // Slightly higher opacity for readability
    paddingHorizontal: 10,
    justifyContent: 'center', // Vertically center text
  },

  titleText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'left',
  },
});