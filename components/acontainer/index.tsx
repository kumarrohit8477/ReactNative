import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';

import { SERVICES as SERVICES_DATA, Service } from '@/data/services';
import IconModal from '@/modal';

/* ================= TYPES ================= */
interface ServiceItem {
  id: string;
  title: string;
  image: any;
}

/* ================= DATA ================= */
const MIDBOX_SERVICES: ServiceItem[] = [
  { id: 'carpenter', title: 'Carpenter', image: require('@/assets/icons/carpenter.png') },
  { id: 'plumber', title: 'Plumber', image: require('@/assets/icons/plumber.png') },
  { id: 'electrician', title: 'Electrician', image: require('@/assets/icons/electrician.png') },
  { id: 'cleaning', title: 'Cleaning', image: require('@/assets/icons/cleaning.png') },
  { id: 'ac', title: 'AC Service', image: require('@/assets/icons/ac.png') },
  { id: 'ro', title: 'RO Purifier', image: require('@/assets/icons/ro.png') },
  { id: 'painting-waterproofing', title: 'Painting & Water Proofing', image: require('@/assets/icons/painter.png') },
  { id: 'renovation', title: 'Renovation', image: require('@/assets/icons/renovation.png') },
  { id: 'consult', title: 'Book Consultation', image: require('@/assets/icons/consultant.png') },
];

/* ================= COMPONENT ================= */
const Midbox: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (item: ServiceItem) => {
    const service = SERVICES_DATA.find(
      (s) => s.id === item.id
    );

    if (service) {
      setSelectedService(service);
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedService(null);
  };

  return (
    <View style={styles.midbox}>
      <View style={styles.gridContainer}>
        {MIDBOX_SERVICES.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.midboxIcon}
            activeOpacity={0.85}
            onPress={() => openModal(item)}
          >
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.mbii} />
            </View>

            <Text style={styles.iconText} numberOfLines={2}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        {selectedService && (
          <IconModal
            service={selectedService}
            onClose={closeModal}
          />
        )}
      </Modal>
    </View>
  );
};

export default Midbox;

const styles = StyleSheet.create({
  midbox: {
    backgroundColor: '#f4f6f8',
    paddingHorizontal: 14,
    paddingVertical: 16,
    borderRadius: 18,
    marginHorizontal: 12,
    marginTop: 4,
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 14,
  },

  midboxIcon: {
    width: '30%',
    height: 100,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // iOS shadow
    shadowColor: '#373636',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    // Android
    elevation: 4,
  },

  imageContainer: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: '#f1f3f5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mbii: {
    width: 34,
    height: 34,
  },

  iconText: {
    fontSize: 11.5,
    fontWeight: '600',
    color: '#2c3e50',
    textAlign: 'center',
    lineHeight: 14,
  },
});
