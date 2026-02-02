import React, { memo } from 'react';
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// ---------------- COMPONENTS ----------------
import Header from '@/components/Header';
import Acontainer from '@/components/acontainer';
import Bookservice from '@/components/bookservices';
import MostBookingServices from '@/components/mostbookedservice';
import HomeImprovementServices from '@/components/aa';
import ServiceSection from '@/components/ServiceSection';
import CleanNpest from '@/components/ServiceSection/clean&pest';
import Renovation from '@/components/ServiceSection/renovation';

// ---------------- HOME PAGE ----------------
const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Platform.OS === 'android' ? '#ddedf0' : undefined}
      />

      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Acontainer />
        <Bookservice />
        <MostBookingServices />
        <HomeImprovementServices />
        <ServiceSection />
        <CleanNpest />
        <Renovation />
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(HomePage);

// ---------------- STYLES ----------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1ebeb',
    paddingTop: 30,
  },
  scrollContent: {
    paddingBottom: 5,
  },
});
