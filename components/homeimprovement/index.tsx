import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ListRenderItem,
  ImageSourcePropType,
  useWindowDimensions,
  Modal,
} from 'react-native';
import { router } from 'expo-router';

import Card from '../card';
import IconModal from '@/modal';
import { SERVICES as SERVICES_DATA, Service } from '@/data/services';

/* ================= TYPES ================= */

interface ServiceItem {
  id: string; // MUST match Service.id
  title: string;
  image: ImageSourcePropType;
  route: string;
}

/* ================= GRID DATA ================= */

const SERVICES: ServiceItem[] = [
  {
    id: 'carpenter',
    title: 'Carpenter',
    image: require('@/assets/images/carpenter.png'),
    route: '/service/carpenter',
  },
  {
    id: 'plumber',
    title: 'Plumber',
    image: require('@/assets/images/plumber.png'),
    route: '/service/plumber',
  },
  {
    id: 'electrician',
    title: 'Electrician',
    image: require('@/assets/images/electrician.png'),
    route: '/service/electrician',
  },
  {
    id: 'painting-waterproofing',
    title: 'Painting & Waterproofing',
    image: require('@/assets/images/painter.png'),
    route: '/service/painter',
  },
  {
    id: 'mason',
    title: 'Mason',
    image: require('@/assets/images/mason.png'),
    route: '/service/mason',
  },
  {
    id: 'flooring-tiling',
    title: 'Flooring & Tiling',
    image: require('@/assets/images/tilesetter.png'),
    route: '/service/flooring',
  },
  {
    id: 'aluminium-work',
    title: 'Aluminium Work',
    image: require('@/assets/images/cabinate.png'),
    route: '/service/aluminium',
  },
  {
    id: 'steel-welding',
    title: 'Steel & Welding',
    image: require('@/assets/images/railing.jpg'),
    route: '/service/steel',
  },
  {
    id: 'pvc-panel',
    title: 'PVC Panel',
    image: require('@/assets/images/pvc.jpg'),
    route: '/service/pvc',
  },
];

/* ================= CONSTANTS ================= */

const NUM_COLUMNS = 3;
const CARD_GAP = 12;

/* ================= COMPONENT ================= */

const ServicesGrid: React.FC = () => {
  const { width } = useWindowDimensions();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const CARD_WIDTH =
    (width - CARD_GAP * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

  /* ---------- HANDLERS ---------- */

const handlePress = useCallback((item: ServiceItem) => {
  if (item.id === 'mason') {
    router.push('/service/mason');
    return;
  }

  if (item.id === 'aluminium-work') {
    router.push('/service/aluminium');
    return;
  }

  // 👉 Open modal for all other services
  const service = SERVICES_DATA.find(
    (s) => s.id === item.id
  );

  if (service) {
    setSelectedService(service);
    setModalVisible(true);
  }
}, []);


  const closeModal = useCallback(() => {
    setModalVisible(false);
    setSelectedService(null);
  }, []);

  /* ---------- RENDER ITEM ---------- */

  const renderItem = useCallback<ListRenderItem<ServiceItem>>(
    ({ item }) => (
      <Card
        title={item.title}
        image={item.image}
        style={{ width: CARD_WIDTH }}
        onPress={() => handlePress(item)}
      />
    ),
    [CARD_WIDTH, handlePress]
  );

  /* ---------- UI ---------- */

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Home improvement services
      </Text>

      <FlatList
        data={SERVICES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={NUM_COLUMNS}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* MODAL */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          {selectedService && (
            <IconModal
              service={selectedService}
              onClose={closeModal}
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

export default ServicesGrid;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: CARD_GAP,
    paddingTop: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#222',
  },
  listContent: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: CARD_GAP,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
