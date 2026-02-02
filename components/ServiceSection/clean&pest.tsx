import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageSourcePropType,
  ListRenderItem,
} from 'react-native';
import ServiceCard from './ServiceCard';
// ---------------- TYPES ----------------
interface ServiceItem {
  id: string;
  image: ImageSourcePropType; // Fixed type from 'any'
  serviceName: string;
}
// ---------------- DATA ----------------
// Ideally, move this to a separate constants file
const SERVICES_DATA: ServiceItem[] = [
  {
    id: '1',
    image: require('@/assets/images/bathroom.png'),
    serviceName: 'Bathroom & Kitchen Cleaning',
  },
  {
    id: '2',
    image: require('@/assets/images/sofa.png'),
    serviceName: 'Sofa & Carpet Cleaning',
  },
  {
    id: '3',
    image: require('@/assets/images/refrigerator.png'),
    serviceName: 'Full Home Deep Cleaning',
  },
  {
    id: '4',
    image: require('@/assets/images/wtc.jpg'),
    serviceName: 'Water Tank Cleaning',
  },
  {
    id: '5',
    image: require('@/assets/images/pc.jpg'),
    serviceName: 'Pest Control',
  },
  {
    id: '6',
    image: require('@/assets/images/pc.jpg'),
    serviceName: 'Mosquito Net',
  },
];
// ---------------- COMPONENT ----------------
const CleanNpest = () => {
  // 1. Stable Callback: This ensures 'onPress' prop doesn't change on every render
  const handleServicePress = useCallback((id: string) => {
    console.log(`Service selected: ${id}`);
    // Navigation logic goes here
  }, []);
  // 2. Render Item: Defined properly to use the stable callback
  const renderItem: ListRenderItem<ServiceItem> = ({ item }) => (
    <ServiceCard
      id={item.id}
      image={item.image}
      serviceName={item.serviceName}
      onPress={handleServicePress}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Cleaning & Pest Control</Text>
      <FlatList
        data={SERVICES_DATA}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        // 3. ItemSeparator: Adds space between items, but not after the last one
        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
        renderItem={renderItem}
      />
    </View>
  );
};
export default CleanNpest;
// ---------------- STYLES ----------------
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingVertical: 18,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 16, // Align with list padding
    marginBottom: 12,
    color: '#000',
    letterSpacing: 0.5,
  },
  listContent: {
    paddingHorizontal: 16, // Consistent padding on start and end of scroll
    paddingBottom: 10, // Room for shadow
  },
});