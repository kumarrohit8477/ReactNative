import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

/* ================= MENU ITEM TYPE ================= */
interface MenuItem {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

export default function AccountPage() {
  /* ================= MENU DATA ================= */
  const MENU: MenuItem[] = [
    {
      id: '1',
      title: 'Edit Profile',
      icon: 'person-outline',
      onPress: () => router.push('/edit-profile'),
    },
    {
      id: '2',
      title: 'My Bookings',
      icon: 'calendar-outline',
      onPress: () => router.push('/bookings'),
    },
    {
      id: '3',
      title: 'Saved Addresses',
      icon: 'location-outline',
      onPress: () => router.push('/addresses'),
    },
    {
      id: '4',
      title: 'Help & Support',
      icon: 'help-circle-outline',
      onPress: () => Alert.alert('Support', 'Contact support'),
    },
    {
      id: '5',
      title: 'Settings',
      icon: 'settings-outline',
      onPress: () => router.push('/settings'),
    },
  ];

  /* ================= UI ================= */
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ---------- PROFILE HEADER ---------- */}
        <View style={styles.profileCard}>
          <Image
            source={require('@/assets/icons/users.svg')}
            style={styles.avatar}
          />

          <Text style={styles.name}>Rohit Kumar</Text>
          <Text style={styles.phone}>+91 98765 43210</Text>

          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => router.push('/edit-profile')}
          >
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* ---------- MENU LIST ---------- */}
        <View style={styles.menuCard}>
          {MENU.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={item.onPress}
            >
              <View style={styles.menuLeft}>
                <Ionicons name={item.icon} size={22} color="#333" />
                <Text style={styles.menuText}>{item.title}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

        {/* ---------- LOGOUT ---------- */}
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() =>
            Alert.alert('Logout', 'Are you sure you want to logout?', [
              { text: 'Cancel', style: 'cancel' },
              { text: 'Logout', style: 'destructive' },
            ])
          }
        >
          <Ionicons name="log-out-outline" size={20} color="red" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
  phone: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  editBtn: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editText: {
    fontSize: 14,
    fontWeight: '600',
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
  },
  logoutBtn: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'red',
  },
});
