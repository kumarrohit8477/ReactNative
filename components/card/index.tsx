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
  /** Optional style override (margin, width, etc.) */
  style?: StyleProp<ViewStyle>;
}

const Card: React.FC<CardProps> = ({ title, image, onPress, style }) => {
  return (
    <View style={[styles.shadowWrapper, style]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: '#e6e6e6' }}
        accessibilityRole="button"
        accessibilityLabel={`Open ${title}`}
        style={({ pressed }) => [
          styles.card,
          pressed && styles.pressed,
        ]}
      >
        {/* Image */}
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} resizeMode="cover" />
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default memo(Card);

const styles = StyleSheet.create({
  /* Outer wrapper only for shadow */
  shadowWrapper: {
    width: 115,
    height: 120,
    backgroundColor: 'transparent',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    // Android
    elevation: 4,
    
  },

  /* Main card */
  card: {
    flex: 1,
    overflow: 'hidden',
  },

  /* Press feedback (iOS + Android fallback) */
  pressed: {
    opacity: Platform.OS === 'ios' ? 0.75 : 1,
  },

  imageContainer: {
    flex: 1,
    
  },

  image: {
    width: '100%',
    height: 90,
    borderRadius: 10,
    overflow: 'hidden',
  },

  titleContainer: {
    height: 30,
    justifyContent: 'center',
    paddingHorizontal: 6,
  },

  title: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});
