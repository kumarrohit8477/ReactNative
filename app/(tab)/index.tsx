import React, { memo } from 'react';
import {
  StyleSheet,
  StatusBar,
  Platform,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// ---------------- COMPONENTS ----------------
import Header from '@/components/Header';
import Acontainer from '@/components/acontainer';
import Bookservice from '@/components/bookservices';
import MostBookingServices from '@/components/mostbookedservice';
import HomeImprovementServices from '@/components/homeimprovement';
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

      <FlatList
        data={[]} // 👈 empty because content is static
        keyExtractor={() => 'static'}
        showsVerticalScrollIndicator={false}
        renderItem={null}
        ListHeaderComponent={
          <>
            <Acontainer />
            <Bookservice />
            <MostBookingServices />
            <HomeImprovementServices /> {/* FlatList is SAFE here */}
            <ServiceSection />
            <CleanNpest />
            <Renovation />
          </>
        }
        contentContainerStyle={styles.scrollContent}
      />
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
    paddingBottom: 10,
  },
});
