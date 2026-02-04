import React, { memo } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

interface ServiceCardProps {
  id: string; // now this is ROUTE
  image: ImageSourcePropType;
  serviceName: string;
  onPress: (route: string) => void;
}


const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  image,
  serviceName,
  onPress,
}) => {
  // dedicated handler to prevent inline arrow functions in the parent
const handlePress = () => onPress(id);


  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityLabel={`Select ${serviceName} service`}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} resizeMode="cover" />
        </View>

        <Text style={styles.serviceName} numberOfLines={2}>
          {serviceName}
        </Text>
      </View>

    </TouchableOpacity>
  );
};

// Use memo to prevent re-renders if props haven't changed
export default memo(ServiceCard);

const styles = StyleSheet.create({
    container: {
    width: 140,
  },
  imageContainer: {
    height: 100,
    borderWidth: 1,
    borderColor: '#eeeeeeb0',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#eae6e6', // Fallback color while loading
  },
  image: {
    width: '100%',
    height: '100%',
  },
  serviceName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2b2a2a',
    marginTop: 6,
    paddingHorizontal: 8,
  },
});