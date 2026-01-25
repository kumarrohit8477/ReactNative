import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
// Assuming you are using React Navigation
import { useNavigation } from '@react-navigation/native';

// 1. Define the Data Structure
interface ServiceItem {
  name: string;
  image: ImageSourcePropType; // or string for URIs
  route: string;
}

const SERVICES: ServiceItem[] = [
  { name: 'Carpenter', image: require('@/assets/icons/caricon.png'), route: 'Carpenter' },
  { name: 'Electrician', image: require('@/assets/icons/elecicon.png'), route: 'Electrician' },
  { name: 'Plumber', image: require('@/assets/icons/plumicon.png'), route: 'Plumber' },
  { name: 'Cleaning', image: require('@/assets/icons/cleaningicon.png'), route: 'ServiceTypeSelector' },
  { name: 'AC Service', image: require('@/assets/icons/acicon.png'), route: 'Acservice' },
  { name: 'Consultation', image: require('@/assets/icons/roicon.png'), route: 'consultation' },
];

const Midbox: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.midbox}>
      <Text style={styles.midboxPara}>What are you looking for?</Text>
      
      <View style={styles.gridContainer}>
        {SERVICES.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.midboxIcon}
            onPress={() => navigation.navigate(item.route)}
            activeOpacity={0.7} // Simulates the hover effect interaction
          >
            <Image 
              source={item.image} 
              style={styles.mbii} 
              resizeMode="contain" 
            />
            <Text style={styles.iconText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Midbox;

const styles = StyleSheet.create({
  midbox: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    // Shadow for elevation (iOS/Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  midboxPara: {
    fontSize: 22, // Adjusted slightly for mobile legibility
    fontWeight: '600',
    color: 'black',
    marginBottom: 15,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12, // Works in newer React Native versions (0.71+)
  },
  midboxIcon: {
    // We use a percentage width to ensure 3 items fit per row on most phones
    // approx 30% allows space for the 'gap'
    width: '30%', 
    aspectRatio: 1, // Keeps it square like your 110px x 110px
    backgroundColor: '#f6f6f6',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  mbii: {
    width: '50%', 
    height: '50%',
    marginBottom: 8,
  },
  iconText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
});