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
    image: require('@/assets/images/homerenovation.jpeg'),
    serviceName: 'Home Renovation',
  },
  {
    id: '2',
    image: require('@/assets/images/kitchen3.png'),
    serviceName: 'Kitchen Remodeling',
  },
  {
    id: '3',
    image: require('@/assets/images/bathroom.webp'),
    serviceName: 'Bathroom Renovation',
  },

];
// ---------------- COMPONENT ----------------
const Renovation = () => {
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
      <Text style={styles.headerTitle}>Renovation</Text>
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
export default Renovation;
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