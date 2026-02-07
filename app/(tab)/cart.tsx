import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

/* ================= TYPES ================= */
interface Address {
  id: string;
  label: string;
  details: string;
}

/* ================= DUMMY ADDRESSES ================= */
const ADDRESSES: Address[] = [
  {
    id: '1',
    label: 'Home',
    details: 'Flat 203, Green Heights, Sector 12, Noida',
  },
  {
    id: '2',
    label: 'Office',
    details: '5th Floor, Tech Park, Electronic City, Bengaluru',
  },
];

export default function AddressConfirmationPage() {
  const [selectedId, setSelectedId] = useState('1');

  const selectedAddress = ADDRESSES.find(a => a.id === selectedId);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Confirm Address</Text>

      <ScrollView>
        {ADDRESSES.map(address => (
          <TouchableOpacity
            key={address.id}
            style={[
              styles.card,
              selectedId === address.id && styles.activeCard,
            ]}
            onPress={() => setSelectedId(address.id)}
          >
            <View style={styles.row}>
              <Ionicons
                name={
                  selectedId === address.id
                    ? 'radio-button-on'
                    : 'radio-button-off'
                }
                size={22}
              />
              <View style={styles.info}>
                <Text style={styles.label}>{address.label}</Text>
                <Text style={styles.details}>{address.details}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {/* ADD NEW ADDRESS */}
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => router.push('/addresses/add')}
        >
          <Ionicons name="add-circle-outline" size={22} />
          <Text style={styles.addText}>Add New Address</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.small}>Deliver to</Text>
          <Text style={styles.bold}>
            {selectedAddress?.label}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.confirmBtn}
          onPress={() =>
            Alert.alert(
              'Address Confirmed',
              'Proceeding to payment'
            )
          }
        >
          <Text style={styles.confirmText}>Confirm & Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  card: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  activeCard: {
    borderColor: '#000',
    backgroundColor: '#f9f9f9',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },
  addText: {
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  small: {
    fontSize: 12,
    color: '#777',
  },
  bold: {
    fontSize: 16,
    fontWeight: '700',
  },
  confirmBtn: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
