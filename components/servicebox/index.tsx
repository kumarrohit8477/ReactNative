import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,} from 'react-native';
// --- Interfaces ---
interface ServiceBoxProps {
  serviceName: string;
  items: string[];
  onItemPress?: (item: string) => void;
}
const ServiceBox: React.FC<ServiceBoxProps> = ({ serviceName, items, onItemPress }) => {
  return (
    <View style={styles.serviceContainer}>
      <Text style={styles.header}>{serviceName}</Text>
      <View style={styles.itemsRow}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemBox}
            onPress={() => onItemPress && onItemPress(item)}
            activeOpacity={0.7} // Replaces CSS :hover transition effects
          >
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ServiceBox;
const styles = StyleSheet.create({
  serviceContainer: {
    alignSelf: 'center', // Centers the container (margin: 0 auto)
    width: '100%',        // Changed from 25vw to 90% for mobile readability
    maxWidth: 400,       // Prevents it from getting too wide on tablets
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#d0b9b9',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5, // Android shadow equivalent
  },
  header: {
    marginTop: 0,
    marginBottom: 20,
    color: '#333',
    fontSize: 15, // Approx 2.5rem
    fontWeight: 'bold', // React Native doesn't inherit bold from h2
    borderBottomWidth: 2,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 10,
  },
  itemsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15, // Matches CSS gap
  },
  itemBox: {
    minWidth: 90, // Matches minmax(100px)
    flexGrow: 1,   // Allows box to fill available space (1fr)
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
  },
  itemText: {
    color: '#555',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 13,
  },
});