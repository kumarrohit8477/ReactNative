import React, { memo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

/* --------------------------------------------------
   COMPONENT
-------------------------------------------------- */

const CarpenterRepairPage = () => {
  const { serviceName, optionSelected } = useLocalSearchParams();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Text style={styles.heading}>
        {optionSelected ?? 'Carpenter Repair'}
      </Text>

      <Text style={styles.subHeading}>
        Professional carpenter repair services at your doorstep
      </Text>

      {/* Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What we repair</Text>

        <Text style={styles.listItem}>• Door & window repair</Text>
        <Text style={styles.listItem}>• Bed & wardrobe repair</Text>
        <Text style={styles.listItem}>• Loose hinges & handles</Text>
        <Text style={styles.listItem}>• Drawer & cabinet fixing</Text>
        <Text style={styles.listItem}>• Wooden furniture repair</Text>
      </View>

      {/* Price Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pricing</Text>
        <Text style={styles.priceText}>
          Starts from ₹199 (inspection included)
        </Text>
      </View>

      {/* Book Button */}
      <Pressable
        style={({ pressed }) => [
          styles.bookButton,
          pressed && styles.bookButtonPressed,
        ]}
        onPress={() =>
          router.push({
            pathname: '/booking',
            params: {
              service: serviceName ?? 'carpenter',
              type: 'repair',
            },
          })
        }
      >
        <Text style={styles.bookButtonText}>Book Repair</Text>
      </Pressable>
    </ScrollView>
  );
};

export default memo(CarpenterRepairPage);

/* --------------------------------------------------
   STYLES
-------------------------------------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },

  content: {
    padding: 16,
    paddingBottom: 30,
  },

  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 6,
  },

  subHeading: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 20,
  },

  section: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 10,
  },

  listItem: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 6,
  },

  priceText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#059669',
  },

  bookButton: {
    backgroundColor: '#2563eb',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },

  bookButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },

  bookButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
