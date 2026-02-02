import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
interface Props {
  image: ImageSourcePropType; // Use 'string' if passing URLs, 'ImageSourcePropType' if using require()
  serviceName: string;
  rating: string;
  price: string;
}
const MostBookingServicesItem: React.FC<Props> = ({ image, serviceName, rating, price }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.details}>
        <Text style={styles.serviceName} numberOfLines={1}>{serviceName}</Text>
        <View style={styles.row}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={12} color="#fff" />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
          <Text style={styles.price}>₹{price}</Text>
        </View>
      </View>
    </View>
  );
};
export default MostBookingServicesItem;
const styles = StyleSheet.create({
  card: {
    width: 140, // Fixed width for horizontal scrolling
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 15,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 3,
    overflow: 'hidden', // Ensures image respects border radius
    borderWidth: 1,
    borderColor: '#eee'
  },
  image: {
    width: '100%',
    height: '65%'
  },
  details: {
    padding: 8,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    backgroundColor: 'green',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    alignItems: 'center',
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});
