import React from 'react';
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
  rating: number;
  reviews: number;
  price: string;
  bullets: string[];
  image: any;
}

/* ================= DATA ================= */
const CATEGORIES: Category[] = [
  {
    id: 'hour',
    title: 'Book by hour',
    image: require('@/assets/images/bed.png'),
  },
  {
    id: 'doors',
    title: 'Doors &\nWindows',
    image: require('@/assets/images/bed.png'),
  },
  {
    id: 'furniture',
    title: 'Furniture &\nStorage',
    image: require('@/assets/images/bed.png'),
  },
  {
    id: 'consult',
    title: 'Book a\nconsultation',
    image: require('@/assets/images/bed.png'),
  },
];

const SERVICES: ServiceItem[] = [
  {
    id: 'book-hour',
    title: 'Book By Hour',
    rating: 4.3,
    reviews: 26,
    price: '₹499',
    bullets: [
      'Hire expert carpenters by the hour',
      'Fittings and installations with reliable workmanship',
    ],
    image: require('@/assets/images/bed.png'),
  },
  {
    id: 'door-install',
    title: 'Door Repair & Installation',
    rating: 4.4,
    reviews: 14,
    price: '₹249',
    bullets: ['Quick, reliable door repair/installation'],
    image: require('@/assets/images/bed.png'),
  },
  {
    id: 'lock-install',
    title: 'Door Lock Repair & Installation',
    rating: 4.3,
    reviews: 28,
    price: '₹249',
    bullets: ['Fast, safe door lock repair & installation'],
    image: require('@/assets/images/bed.png'),
  },
];

/* ================= COMPONENT ================= */
const CarpenterServicePage: React.FC = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* BANNER */}
      <Image
        source={require('@/assets/images/bed.png')}
        style={styles.banner}
      />

      {/* CATEGORY GRID */}
      <Text style={styles.sectionTitle}>What service do you need?</Text>

      <View style={styles.categoryGrid}>
        {CATEGORIES.map((item) => (
          <View key={item.id} style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.title}</Text>
          </View>
        ))}
      </View>

      {/* SERVICES LIST */}
      <Text style={styles.sectionTitle}>Book by hour</Text>

      <FlatList
        data={SERVICES}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
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

              <Text style={styles.priceText}>
                Starts at {item.price}
              </Text>

              {item.bullets.map((b, i) => (
                <View key={i} style={styles.bulletRow}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>{b}</Text>
                </View>
              ))}

              <Text style={styles.viewDetails}>View details ›</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },

  banner: {
    width: width - 32,
    height: width * 0.45,
    margin: 16,
    borderRadius: 16,
    resizeMode: 'cover',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: 16,
    marginTop: 12,
    color: '#111827',
  },

  /* CATEGORY GRID */
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 8,
    marginTop: 12,
  },
  categoryItem: {
    width: width / 2 - 24,
    margin: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    alignItems: 'center',
    padding: 12,
    elevation: 2,
  },
  categoryImage: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
  categoryText: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
  },

  /* SERVICE CARD */
  serviceCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 16,
    elevation: 3,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 12,
    color: '#6B7280',
  },
  priceText: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },

  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#111827',
    marginRight: 8,
  },
  bulletText: {
    fontSize: 13,
    color: '#374151',
    flex: 1,
  },

  viewDetails: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
  },

  serviceRight: {
    alignItems: 'center',
    marginLeft: 12,
  },
  serviceImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  addBtn: {
    borderWidth: 1.5,
    borderColor: '#2563EB',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 18,
  },
  addText: {
    color: '#2563EB',
    fontSize: 13,
    fontWeight: '700',
  },
});
