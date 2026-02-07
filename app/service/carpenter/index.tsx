import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, Image } from 'react-native';
import { SERVICES, Service } from '@/data/services'; // Adjust path

export default function ServicesScreen() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleServicePress = (service: Service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* 1. The List of Service Cards */}
      <FlatList
        data={SERVICES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => handleServicePress(item)}
            style={{ padding: 15, backgroundColor: '#f0f0f0', marginBottom: 10, borderRadius: 8 }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* 2. The Shared Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' }}>
          <View style={{ backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, height: '70%' }}>
            
            {/* Modal Header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{selectedService?.name} Options</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ color: 'red' }}>Close</Text>
              </TouchableOpacity>
            </View>

            {/* List of Options inside the Modal */}
            <FlatList
              data={selectedService?.options}
              keyExtractor={(opt) => opt.id}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderColor: '#eee' }}
                  onPress={() => {
                    console.log("Navigate to:", item.route);
                    setModalVisible(false);
                  }}
                >
                  <Image source={item.image} style={{ width: 40, height: 40, marginRight: 15 }} />
                  <Text>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}