import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

/* ================= TYPES ================= */
interface Category {
  id: string;
  title: string;
  image: any;
}

interface ServiceItem {
  id: string;
  title: string;
  categoryId: string;
  rating: number;
  reviews: number;
  price: string;
  bullets: string[];
  image: any;
}

/* ================= DATA ================= */
const CATEGORIES: Category[] = [
  { id: 'hour', title: 'Book by hour', image: require('@/assets/images/bed.png') },
  { id: 'doors', title: 'Doors &\nWindows', image: require('@/assets/images/bed.png') },
  { id: 'furniture', title: 'Furniture &\nStorage', image: require('@/assets/images/bed.png') },
];

const SERVICES: ServiceItem[] = [
  {
    id: 'book-hour',
    categoryId: 'hour',
    title: 'Book By Hour',
    rating: 4.3,
    reviews: 26,
    price: '₹499',
    bullets: ['Hire expert carpenters by the hour'],
    image: require('@/assets/images/bed.png'),
  },
  {
    id: 'door-install',
    categoryId: 'doors',
    title: 'Door Repair & Installation',
    rating: 4.4,
    reviews: 14,
    price: '₹249',
    bullets: ['Quick, reliable door repair'],
    image: require('@/assets/images/bed.png'),
  },
  {
    id: 'lock-install',
    categoryId: 'doors',
    title: 'Door Lock Repair',
    rating: 4.3,
    reviews: 28,
    price: '₹249',
    bullets: ['Safe lock installation'],
    image: require('@/assets/images/bed.png'),
  },
  {
    id: 'wardrobe',
    categoryId: 'furniture',
    title: 'Wardrobe Repair',
    rating: 4.5,
    reviews: 18,
    price: '₹399',
    bullets: ['Hinges & alignment fix'],
    image: require('@/assets/images/bed.png'),
  },
];

/* ================= COMPONENT ================= */
const CarpenterServicePage: React.FC = () => {
  const serviceListRef = useRef<FlatList<ServiceItem>>(null);

  const scrollToCategory = (categoryId: string) => {
    const index = SERVICES.findIndex(
      service => service.categoryId === categoryId
    );

    if (index !== -1) {
      serviceListRef.current?.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0, // aligns item to top
      });
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* BANNER */}
      <Image
        source={require('@/assets/images/bed.png')}
        style={styles.banner}
      />

      <Text style={styles.sectionTitle}>What service do you need?</Text>

      {/* CATEGORY GRID */}
      <View style={styles.categoryContainer}>
        <View style={styles.categoryGrid}>
          {CATEGORIES.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.categoryItem}
              onPress={() => scrollToCategory(item.id)}
            >
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* SERVICES LIST */}
      <FlatList
        ref={serviceListRef}
        data={SERVICES}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        getItemLayout={(_, index) => ({
          length: 160,
          offset: 160 * index,
          index,
        })}
        renderItem={({ item }) => (
          <View style={styles.serviceCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.serviceTitle}>{item.title}</Text>

              <View style={styles.ratingRow}>
                <Ionicons name="star" size={14} color="#FBBF24" />
                <Text style={styles.ratingText}>
                  {item.rating} ({item.reviews} reviews)
                </Text>
              </View>

              <Text style={styles.priceText}>Starts at {item.price}</Text>

              {item.bullets.map((b, i) => (
                <View key={i} style={styles.bulletRow}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>{b}</Text>
                </View>
              ))}
            </View>

            <View style={styles.serviceRight}>
              <Image source={item.image} style={styles.serviceImage} />
              <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.addText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default CarpenterServicePage;

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },

  banner: {
    width: width - 32,
    height: width * 0.45,
    margin: 16,
    borderRadius: 16,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: 16,
    color: '#111827',
  },

  categoryContainer: {
    margin: 16,
    backgroundColor: '#E5E7EB',
    borderRadius: 20,
    paddingVertical: 16,
  },

  categoryGrid: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  categoryItem: { alignItems: 'center' },

  categoryImage: {
    width: 80,
    height: 70,
    borderRadius: 8,
  },

  categoryText: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '500',
  },

  serviceCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 16,
  },

  serviceTitle: { fontSize: 16, fontWeight: '700' },

  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },

  ratingText: { marginLeft: 6, fontSize: 12 },

  priceText: { marginTop: 6, fontWeight: '700' },

  bulletRow: { flexDirection: 'row', marginTop: 6 },

  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#000',
    marginRight: 8,
  },

  bulletText: { fontSize: 13 },

  serviceRight: { alignItems: 'center', marginLeft: 12 },

  serviceImage: { width: 80, height: 80, marginBottom: 8 },

  addBtn: {
    borderWidth: 1.5,
    borderColor: '#2563EB',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },

  addText: { color: '#2563EB', fontWeight: '700' },
});
