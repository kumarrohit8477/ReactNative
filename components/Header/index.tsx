import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Animated,
  Image,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
  const [city] = useState('Agra')
  const [searchText, setSearchText] = useState('')
  const [showBrandName, setShowBrandName] = useState(true)

  const opacity = useRef(new Animated.Value(1)).current
  const translateY = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -10,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ]).start()

      setShowBrandName(prev => !prev)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* ---------------- HEADER ---------------- */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.greetingText}>Welcome To</Text>

          <Animated.Text
            style={[
              styles.dynamicText,
              {
                opacity,
                transform: [{ translateY }],
              },
            ]}
          >
            {showBrandName ? 'KarigarWork' : 'What are you looking for?'}
          </Animated.Text>
        </View>

        <View style={styles.locationContainer}>
          <Image
            source={require('@/assets/icons/location.png')}
            style={styles.locationIcon}
          />
          <Text style={styles.locationText}>{city}</Text>
        </View>
      </View>

      {/* ---------------- SEARCH ---------------- */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#888" />
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search for services..."
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </View>
      </View>
    </>
  )
}

export default Header
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },

  headerLeft: {
    flex: 1,
    marginRight: 10,
  },

  greetingText: {
    fontSize: 14,
    color: '#777',
  },

  dynamicText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  locationIcon: {
    width: 16,
    height: 16,
    tintColor: '#333',
    resizeMode: 'contain',
  },

  locationText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 14,
    elevation: 2,
  },

  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    marginLeft: 8,
  },
})
