import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StatusBar,
} from 'react-native';
import {styles} from '../../style'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; // Assuming Expo, or use your icon library

/* ---------------- DATA ---------------- */

const CATEGORIES = [
  { id: 'hour', title: 'Book by hour', icon: require('@/assets/images/bed.png') },
  { id: 'doors', title: 'Doors &\nWindows', icon: require('@/assets/images/bed.png') },
  { id: 'furniture', title: 'Furniture &\nStorage', icon: require('@/assets/images/bed.png') },
  { id: 'consult', title: 'Book a\nconsultation', icon: require('@/assets/images/bed.png') },
];

const SECTIONS = [
  {
    id: 'hour',
    title: 'Book by hour',
    items: [
      {
        id: 'h1',
        name: 'Book By Hour',
        rating: '4.3',
        reviews: '26',
        price: '499',
        features: [
          'Hire expert carpenters',
          'Fittings, and installations with reliable workmanship.',
        ],
        image: require('@/assets/images/bed.png'),
      },
    ],
  },
  {
    id: 'doors',
    title: 'Doors & Windows',
    items: [
      {
        id: 'd1',
        name: 'Door Repair & Installation',
        rating: '4.4',
        reviews: '14',
        price: '249',
        features: ['Quick, reliable door repair/installation for all types'],
        image: require('@/assets/images/bed.png'),
      },
      {
        id: 'd2',
        name: 'Door Lock Repair & Installation',
        rating: '4.3',
        reviews: '28',
        price: '249',
        features: ['Fast, safe door lock repair or installation'],
        image: require('@/assets/images/bed.png'),
      },
    ],
  },
];

/* ---------------- COMPONENT ---------------- */

export default function CarpenterServiceScreen() {
  const scrollRef = useRef<ScrollView>(null);
  const sectionRefs = useRef<Record<string, number>>({});

  const scrollToSection = (id: string) => {
    if (sectionRefs.current[id]) {
      scrollRef.current?.scrollTo({
        y: sectionRefs.current[id],
        animated: true,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
        {/* ---------- HERO BANNER ---------- */}
        <View style={styles.heroContainer}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Reliable fix</Text>
            <Text style={styles.heroSubtitle}>Starts at ₹149</Text>
          </View>
          <Image
            source={require('@/assets/images/bed.png')}
            style={styles.heroImage}
          />
        </View>

        {/* ---------- CATEGORY SELECTION ---------- */}
        <View style={styles.categorySection}>
          <Text style={styles.sectionHeading}>What can we help you with?</Text>
          <View style={styles.grid}>
            {CATEGORIES.map((cat) => (
              <Pressable key={cat.id} style={styles.gridItem} onPress={() => scrollToSection(cat.id)}>
                <View style={styles.iconWrapper}>
                  <Image source={cat.icon} style={styles.gridIcon} />
                </View>
                <Text style={styles.gridText}>{cat.title}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.grayDivider} />

        {/* ---------- SERVICE SECTIONS ---------- */}
        {SECTIONS.map((section) => (
          <View
            key={section.id}
            style={styles.serviceSection}
            onLayout={(e) => sectionRefs.current[section.id] = e.nativeEvent.layout.y}
          >
            <Text style={styles.sectionTitle}>{section.title}</Text>

            {section.items.map((item) => (
              <View key={item.id} style={styles.card}>
                <View style={styles.cardLeft}>
                  <Text style={styles.cardName}>{item.name}</Text>
                  <View style={styles.ratingRow}>
                    <Ionicons name="star" size={14} color="#FFB400" />
                    <Text style={styles.ratingText}>{item.rating} ({item.reviews} reviews)</Text>
                  </View>
                  <Text style={styles.cardPrice}>Starts at ₹{item.price}</Text>

                  {item.features.map((feature, idx) => (
                    <View key={idx} style={styles.featureRow}>
                      <View style={styles.bullet} />
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}

                  <Pressable style={styles.viewDetails}>
                    <Text style={styles.viewDetailsText}>View details </Text>
                    <Ionicons name="chevron-forward" size={14} color="#005A64" />
                  </Pressable>
                </View>

                <View style={styles.cardRight}>
                  <Image source={item.image} style={styles.cardImage} />
                  <Pressable style={styles.addButton}>
                    <Text style={styles.addText}>Add</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        ))}
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

