import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
  Alert,
  Platform,
  StatusBar,
} from 'react-native';

// --- TypeScript Interfaces ---
interface MenuItem {
  id: string;
  title: string;
  icon: string; // Using emojis as placeholders for icons
  action?: () => void;
}

const Account = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // --- Handlers ---
  const handleLogout = () => {
    Alert.alert('Log Out', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Log Out', style: 'destructive', onPress: () => console.log('Logged out') },
    ]);
  };

  const menuItems: MenuItem[] = [
    { id: '1', title: 'My Orders', icon: '📦' },
    { id: '2', title: 'Shipping Addresses', icon: '📍' },
    { id: '3', title: 'Payment Methods', icon: '💳' },
    { id: '4', title: 'Promocodes', icon: 'ticket' },
    { id: '5', title: 'My Reviews', icon: '⭐' },
    { id: '6', title: 'Help & Support', icon: '🎧' },
  ];

  const renderMenuItem = (item: MenuItem) => (
    <TouchableOpacity key={item.id} style={styles.menuItem}>
      <View style={styles.menuItemLeft}>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>{item.icon}</Text>
        </View>
        <Text style={styles.menuItemTitle}>{item.title}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* 1. Profile Header */}
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
              style={styles.profileImage}
            />
            <View style={styles.editIconContainer}>
                <Text style={styles.editIcon}>✎</Text>
            </View>
          </View>
          <Text style={styles.userName}>Alex Johnson</Text>
          <Text style={styles.userEmail}>alex.johnson@example.com</Text>
          
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* 2. Stats Row */}
        <View style={styles.statsContainer}>
            <View style={styles.statItem}>
                <Text style={styles.statNumber}>12</Text>
                <Text style={styles.statLabel}>Orders</Text>
            </View>
            <View style={styles.verticalDivider} />
            <View style={styles.statItem}>
                <Text style={styles.statNumber}>5</Text>
                <Text style={styles.statLabel}>Wishlist</Text>
            </View>
            <View style={styles.verticalDivider} />
            <View style={styles.statItem}>
                <Text style={styles.statNumber}>$140</Text>
                <Text style={styles.statLabel}>Wallet</Text>
            </View>
        </View>

        {/* 3. Settings Section */}
        <View style={styles.section}>
            <Text style={styles.sectionHeader}>Settings</Text>
            
            <View style={styles.settingRow}>
                <View style={styles.menuItemLeft}>
                    <View style={[styles.iconContainer, { backgroundColor: '#e3f2fd' }]}>
                        <Text style={styles.iconText}>🔔</Text>
                    </View>
                    <Text style={styles.menuItemTitle}>Push Notifications</Text>
                </View>
                <Switch 
                    trackColor={{ false: "#767577", true: "#333" }}
                    thumbColor={notificationsEnabled ? "#fff" : "#f4f3f4"}
                    onValueChange={setNotificationsEnabled}
                    value={notificationsEnabled}
                />
            </View>
        </View>

        {/* 4. Menu List */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Account</Text>
          {menuItems.map(renderMenuItem)}
        </View>

        {/* 5. Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>v1.0.0</Text>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b69c6',
    // The Safe Area fix for Android we discussed:
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  // Header
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#333',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  editIcon: {
    color: '#fff',
    fontSize: 14,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  editProfileButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  editProfileText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  // Stats
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 20,
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 16,
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  verticalDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#eee',
  },
  // Sections
  section: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    // Small Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 16,
  },
  menuItemTitle: {
    fontSize: 16,
    color: '#333',
  },
  chevron: {
    fontSize: 20,
    color: '#ccc',
    fontWeight: 'bold'
  },
  // Settings Row specific
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
  },
  // Logout
  logoutButton: {
    marginTop: 30,
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: '#ffe5e5',
    alignItems: 'center',
  },
  logoutText: {
    color: '#ff4444',
    fontSize: 16,
    fontWeight: 'bold',
  },
  versionText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#aaa',
    fontSize: 12,
  },
});

export default Account;