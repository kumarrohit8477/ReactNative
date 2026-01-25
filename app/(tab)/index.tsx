import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  StatusBar,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ServiceBox from "../../components/servicebox";
import CardContainer from '@/components/containercard';
import Acontainer from '@/components/acontainer';
import Bookservive from '@/components/bookservices';
// --- TypeScript Interfaces ---
interface Category {
  id: string;
  name: string;
}

interface FeaturedItem {
  id: string;
  title: string;
  subtitle: string;
  image: string; // URL for the image
}

// --- Dummy Data ---
const CATEGORIES: Category[] = [
  { id: '1', name: 'All' },
  { id: '2', name: 'Popular' },
  { id: '3', name: 'New' },
  { id: '4', name: 'Trending' },
  { id: '5', name: 'Sales' },
];

const FEATURED_ITEMS: FeaturedItem[] = [
  {
    id: '1',
    title: 'Modern Lamp',
    subtitle: '$45.00',
    image: 'https://images.unsplash.com/photo-1507473888900-52e1adad5481?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '2',
    title: 'Minimalist Chair',
    subtitle: '$120.00',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '3',
    title: 'Wooden Desk',
    subtitle: '$350.00',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
];

const HomePage = () => {
  // Render Item for Horizontal Categories
  const renderCategory = ({ item, index }: { item: Category; index: number }) => (
    <TouchableOpacity
      style={[
        styles.categoryChip,
        index === 0 ? styles.activeCategory : null, // Highlight first item for demo
      ]}
    >
      <Text
        style={[
          styles.categoryText,
          index === 0 ? styles.activeCategoryText : null,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ddedf0" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>





        {/* 1. Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greetingText}>Welcome to,</Text>
            <Text style={styles.userName}>KarigarWork</Text>
          </View>
          <View><Image source={require('@/assets/images/rohit.jpg')} style={styles.profileImage} /></View>
        </View>

        {/* 2. Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search for services..."
            style={styles.searchInput}
            placeholderTextColor="#888888"
          />
        </View>

        {/* 3. Categories (Horizontal) */}
        <View style={styles.sectionContainer}>
          <FlatList
            data={CATEGORIES}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* 4. Featured / Main Content */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Items</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>



          <Acontainer />
          <Bookservive />



          {FEATURED_ITEMS.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View>
          <ServiceBox serviceName="Home Improvement Services" items={["Item 1", "Item 2", "Item 3", "Item 4", "Item 3", "Item 4"]} />
          <ServiceBox serviceName="Home Improvement Services" items={["Item 1", "Item 2", "Item 3", "Item 4", "Item 3", "Item 4"]} />
        </View>



        
        <CardContainer />





      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1ebeb',
    // The Safe Area fix for Android we discussed:
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 16,
    color: '#666',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  // Search
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#eee',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    // Elevation for Android
    elevation: 2,
  },
  // Categories
  sectionContainer: {
    marginBottom: 25,
  },
  categoriesList: {
    paddingHorizontal: 20,
  },
  categoryChip: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  activeCategory: {
    backgroundColor: '#333',
    borderColor: '#333',
  },
  categoryText: {
    color: '#333',
    fontWeight: '600',
  },
  activeCategoryText: {
    color: '#fff',
  },
  // Featured Section
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAllText: {
    color: '#007AFF',
    fontWeight: '600',
  },
  // Cards
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 16,
    overflow: 'hidden',
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: '600',
  },
});

export default HomePage;