import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { SERVICES, Service } from '@/data/services';
import IconModal from '@/Modals/IconModal';

const Midbox: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    // Note: We don't set selectedService to null here because it would 
    // cause the Modal content to vanish while it's still sliding down.
  };

  return (
    <View style={styles.midbox}>
      <View style={styles.gridContainer}>
        {SERVICES.map((service) => (
          <TouchableOpacity
            key={service.id} 
            style={styles.midboxIcon}
            onPress={() => openModal(service)}
            activeOpacity={0.7}
          >
            <Image source={service.icon} style={styles.mbii} resizeMode="contain" />
            <Text style={styles.iconText}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade" 
        onRequestClose={closeModal}
        onDismiss={() => setSelectedService(null)} 
      >
        {selectedService && (
          <IconModal service={selectedService} onClose={closeModal} />
        )}
      </Modal>
    </View>
  );
};

export default Midbox;

const styles = StyleSheet.create({
  midbox: {
    backgroundColor: '#82989e',
    padding: 15,
    elevation: 4,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 15,
  },
  midboxIcon: {
    width: '30%', // Fits 3 in a row
    height: 95,
    backgroundColor: '#fff',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
   
    // Subtle shadow for the cards
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  mbii: {
    width: 90,
    height: 50,
  },
  iconText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2c3e50',
    textAlign: 'center',
  },
});