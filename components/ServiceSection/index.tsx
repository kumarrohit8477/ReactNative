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
import { router } from 'expo-router';

// ---------------- TYPES ----------------
interface ServiceItem {
  id: string;
  image: ImageSourcePropType;
  serviceName: string;
  route: string; // 👈 ADD THIS
}

// ---------------- DATA ----------------
// Ideally, move this to a separate constants file
const SERVICES_DATA: ServiceItem[] = [
  {
    id: '1',
    image: require('@/assets/images/ac.png'),
    serviceName: 'AC Service & Repair',
    route: '/service/appliance/ac',
  },
  {
    id: '2',
    image: require('@/assets/images/washingmachine.jpg'),
    serviceName: 'Washing Machine Repair',
    route: '/service/appliance/washing-machine',
  },
  {
    id: '3',
    image: require('@/assets/images/refrigerator.jpg'),
    serviceName: 'Refrigerator Repair',
    route: '/service/appliance/refrigerator',
  },
  {
    id: '4',
    image: require('@/assets/images/chimney.png'),
    serviceName: 'Chimney Repair',
    route: '/service/appliance/chimney',
  },
  {
    id: '5',
    image: require('@/assets/images/ro.png'),
    serviceName: 'RO Service & Repair',
    route: '/service/appliance/ro',
  },
  {
    id: '6',
    image: require('@/assets/images/microwave.png'),
    serviceName: 'Microwave Oven Repair',
    route: '/service/appliance/microwave',
  },
  {
    id: '7',
    image: require('@/assets/images/gyser.png'),
    serviceName: 'Gyser Repair',
    route: '/service/appliance/gyser',
  },
];

// ---------------- COMPONENT ----------------
const ServicesSection = () => {
  // 1. Stable Callback: This ensures 'onPress' prop doesn't change on every render
  const handleServicePress = useCallback((route: string) => {
    router.push(route);
  }, []);

  // 2. Render Item: Defined properly to use the stable callback
const renderItem: ListRenderItem<ServiceItem> = ({ item }) => (
  <ServiceCard
    id={item.route}          // 👈 pass route instead of id
    image={item.image}
    serviceName={item.serviceName}
    onPress={handleServicePress}
  />
);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Appliance Repair & Service</Text>
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
export default ServicesSection;
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